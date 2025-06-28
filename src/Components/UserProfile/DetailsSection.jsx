import { useEffect, useContext, useState } from "react";
import SessionContext from "../../Context/SessionContext";
import supabase from "../../supabase/supabase-client";

function DetailsSection({isEdit, setIsEdit}){
    const { session } = useContext(SessionContext);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            let ignore = false
            const { user } = session

            const { data, error } = await supabase
                .from('profiles')
                .select('username, first_name, last_name')
                .eq('id', user.id)
                .single()
            if (!ignore){
                if (error){
                    console.log(error);
                } else if (data){
                    setUsername(data.username);
                    setName(data.first_name);
                    setSurname(data.last_name);
                }
            }
        }

        getProfile();
        // return () => { ignore = true }
      }, [session]);

    
    return (
        <div className="col-span-5 flex flex-col gap-5 justify-center items-center">
            <fieldset className="fieldset">
                <legend className="fieldset-legend">{isEdit ? 'Qual è il tuo nome?' : 'Nome'}</legend>
                <input type="text" className="input" placeholder="Il tuo nome" disabled={!isEdit} onChange={(e) => setName(e.target.value)}/>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">{isEdit ? 'Qual è il tuo cognome?' : 'Cognome'}</legend>
                <input type="text" className="input" placeholder="Il tuo cognome" disabled={!isEdit} onChange={(e) => setSurname(e.target.value)}/>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">{isEdit ? 'Qual è il tuo username?' : 'Username'}</legend>
                <input type="text" className="input" placeholder="Il tuo username" disabled={!isEdit} onChange={(e) => setUsername(e.target.value)}/>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input type="text" className="input" placeholder="La tua email" disabled/>
            </fieldset>
        </div>
    )
}

export default DetailsSection