import { useState, useEffect, useContext } from "react"
import SessionContext from "../Context/SessionContext"
import supabase from "../supabase/supabase-client"
import DetailsSection from "../Components/UserProfile/DetailsSection"
import SumUpSection from "../Components/UserProfile/SumUpSection"
import Success from "../Components/Success"
import Message from "../Components/Message"
import { ConfirmSchemaUpdate, getErrors } from "../lib/validationForm"
import FavSection from "../Components/UserProfile/FavsSection"
import AvatarUrlContext from "../Context/AvatarUrlContext"

function UserProfile(){
    const [isEdit, setIsEdit] = useState(false)
    const { session } = useContext(SessionContext);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [state, setState] = useState({
        name: '',
        surname: '',
        username: ''
    })
    const [localAvatarUrl, setLocalAvatarUrl] = useState(null);
    const { setAvatarUrl } = useContext(AvatarUrlContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getProfile = async () => {
            const { user } = session
            const { data, error } = await supabase
                .from('profiles')
                .select('username, first_name, last_name, avatar_url')
                .eq('id', user.id)
                .single()
            if (error){
                console.log(error);
            } else if (data){
                setState(
                    {
                        name: data.first_name,
                        surname: data.last_name,
                        username: data.username
                    }
                )
                setLocalAvatarUrl(data.avatar_url)
            }
        }
        getProfile();
    }, [session]);

    const updateProfile = async (e) => {
        e.preventDefault()
        setSubmitted(true);
        const { error: validationError, data: validationData } = ConfirmSchemaUpdate.safeParse(state);
        if (validationError) {
            const errors = getErrors(validationError);
            setError("Compila correttamente i campi");
            setTimeout(() => {
                setError(null)
            }, 5010);
        } else {
            const { user } = session
            const updates = {
                id: user.id,
                username: state.username,
                first_name: state.name,
                last_name: state.surname,
                updated_at: new Date(),
            }
            const { error } = await supabase.from('profiles').upsert(updates)
            const { data, error: authError } = await supabase.auth.updateUser({
                data: {
                    username: state.username,
                    first_name: state.name,
                    last_name: state.surname,
                },
            });
            if (error || authError) {
                setError("Qualcosa è andato storto! Riprova")
                setTimeout(() => {
                    setError(null)
                }, 5010);
            } else {
                setIsEdit(false)
                setSuccess("Profilo aggiornato con successo!")
                setTimeout(() => {
                    setSuccess(null)
                }, 5010);
            }
        }
    }

    const updateAvatar = async (localAvatarUrl) => {
        const { user } = session
        const updates = {
            id: user.id,
            avatar_url: localAvatarUrl,
            updated_at: new Date(),
        }
        const { error } = await supabase.from('profiles').upsert(updates)
        if (error) {
            setError("Qualcosa è andato storto! Riprova")
            setTimeout(() => {
                setError(null)
            }, 5010);
        } else {
            setIsEdit(false)
            setSuccess("Immagine aggiornata con successo!")
            setLocalAvatarUrl(localAvatarUrl)
            setAvatarUrl(localAvatarUrl)
            setTimeout(() => {
                setSuccess(null)
            }, 5010);
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-around">
            <div className="flex justify-center items-center">
                <h1 className="text-normal text-4xl font-black highlight">Il tuo profilo</h1>
            </div>
            <div className="w-full h-full grid grid-cols-6 gap-15 ">
                <SumUpSection isEdit={isEdit} setIsEdit={setIsEdit} session={session} url={localAvatarUrl} onUpload={(event, url) => updateAvatar(url)} setSuccess={setSuccess} setError={setError}/>
                <DetailsSection isEdit={isEdit} setIsEdit={setIsEdit} session={session} state={state} setState={setState} updateProfile={updateProfile} errors={errors} setErrors={setErrors} touchedFields={touchedFields} setTouchedFields={setTouchedFields} submitted={submitted}/>
                { success && success != "" && <Success text={success} /> }
                { error && error != "" && <Message text={error} /> }
            </div>
            <div className="flex justify-center items-center">
                <h2 className="text-normal text-4xl font-black highlight mt-10">I tuoi preferiti</h2>
            </div>
            <FavSection />
        </div>
    )
}

export default UserProfile