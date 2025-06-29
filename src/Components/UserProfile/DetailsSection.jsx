import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { FormSchemaUpdate, ConfirmSchemaUpdate, getErrors, getFieldError } from "../../lib/validationForm";


function DetailsSection({isEdit, setIsEdit, session, state, setState, updateProfile, errors, setErrors, touchedFields, setTouchedFields, submitted}){
    const {user_metadata: user} = session.user
    const onCancel = () => {
        setIsEdit(false)
        setErrors({});
    }
    const onBlur = (p) => {
            const message = getFieldError(FormSchemaUpdate, p, state[p])
            setErrors((prev) => ({ ...prev, [p]: message }));
            setTouchedFields((prev) => ({ ...prev, [p]: true }));
        };
        const isInvalid = (p) => {
            if (submitted || touchedFields[p]){
                return !!errors[p];
            }
            return undefined
        }
        const setField = (p, valueSelector) => (e) => {
            setState((prev) => ({ ...prev, [p]: valueSelector ? valueSelector(e) : e.target.value }));
        };
    return (
        <form className="col-span-5 flex flex-col gap-5 bg-neutral-800 p-10 self-center" onSubmit={updateProfile} noValidate>
            <div className="flex flex-row justify-center gap-5">
                <div className="flex flex-col gap-3 w-1/2">
                    <label className="text-normal text-2xl highlight font-semibold" htmlFor="text">{isEdit ? 'Qual è il tuo nome?' : 'Nome'}</label>
                    <input
                        required
                        value={isEdit ? state.name : user.first_name}
                        className="bg-black disabled:bg-neutral-900 disabled:text-neutral-500 text-white p-2 rounded-lg"
                        type="text"
                        id="name"
                        placeholder="Il tuo nome"
                        disabled={!isEdit}
                        onChange={setField('name')}
                        onBlur={() => onBlur('name')}
                        aria-invalid={isInvalid('name')}
                    />
                    {errors.name && isEdit && <p className="text-red-500 small">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-3 w-1/2">
                    <label className="text-normal text-2xl highlight font-semibold" htmlFor="surname">{isEdit ? 'Qual è il tuo cognome?' : 'Cognome'}</label>
                    <input
                        required
                        value={isEdit ? state.surname : user.last_name}
                        className="bg-black disabled:bg-neutral-900 disabled:text-neutral-500 text-white p-2 rounded-lg"
                        type="text"
                        id="surname"
                        placeholder="Il tuo cognome"
                        disabled={!isEdit}
                        onChange={setField('surname')}
                        onBlur={() => onBlur('surname')}
                        aria-invalid={isInvalid('surname')}
                    />
                    {errors.surname && isEdit && <p className="text-red-500 small">{errors.surname}</p>}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <div className="flex flex-col gap-3 w-1/2">
                    <label className="text-normal text-2xl highlight font-semibold" htmlFor="username">{isEdit ? 'Qual è il tuo username?' : 'Username'}</label>
                    <input
                        required
                        value={isEdit ? state.username : user.username}
                        className="bg-black disabled:bg-neutral-900 disabled:text-neutral-500 text-white p-2 rounded-lg"
                        type="text"
                        id="username"
                        placeholder="Il tuo username"
                        disabled={!isEdit}
                        onChange={setField('username')}
                        onBlur={() => onBlur('username')}
                        aria-invalid={isInvalid('username')}
                    />
                    {errors.username && isEdit && <p className="text-red-500 small">{errors.username}</p>}
                </div>
                <div className="flex flex-col gap-3 w-1/2">
                    <label className="text-normal text-2xl highlight font-semibold" htmlFor="email">Email</label>
                    <input value={user.email} className="bg-black disabled:bg-neutral-900 disabled:text-neutral-500 text-white p-2 rounded-lg" type="email" id="email" placeholder="La tua email" disabled/>
                </div>
            </div>
            {
                isEdit &&
                <div className="flex flex-row justify-between gap-5 text-normal">
                    <button className="outline-2 outline-red-600 rounded-lg p-2 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 flex flex-row gap-2 items-center" onClick={() => onCancel()} type="button"><MdCancel className="text-2xl"/> Annulla modifiche</button>
                    <button className="outline-2 outline-[yellow] rounded-lg p-2 text-[yellow] hover:bg-[yellow] hover:text-black transition duration-300 flex flex-row gap-2 items-center" type="submit"><FaSave className="text-2xl"/> Salva modifiche</button>
                </div>
            }   
        </form>
    )
}

export default DetailsSection