import { useState } from "react"
import { ConfirmSchema, FormSchema, getErrors, getFieldError } from "../../lib/validationForm";
import supabase from "../../supabase/supabase-client";
import { useNavigate } from "react-router";

import FormBtn from "./FormBtn"
import Message from "../Message";
import Success from "../Success";
import ShowPwdCheckbox from "./ShowPwdCheckbox";

function RegisterForm(){
    const [pwdType, setPwdType] = useState('password');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [state, setState] = useState({
        username: '',
        email: '',
        name: '',
        surname: '',
        password: ''
    })
    const [signError, setSignError] = useState('')
    const [signSuccess, setSignSuccess] = useState('')
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const { error, data } = ConfirmSchema.safeParse(state);
        if (error) {
            const errors = getErrors(error);
            setErrors(errors);
        } else {
            let { error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        first_name: data.name,
                        last_name: data.surname,
                        username: data.username
                    }
                }
            })
            if (error) {
                setSignError(error)
                setTimeout(() => {
                    setSignError('')
                }, 5000);
            } else {
                setSignSuccess("Registrazione avvenuta con successo")
                await new Promise((resolve) => setTimeout(resolve, 3000));
                navigate("/catalog")
            }
        }
    }
    const onBlur = (p) => {
        const message = getFieldError(FormSchema, p, state[p])
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

        <form onSubmit={onSubmit} noValidate className="fieldset bg-black border-[yellow] rounded-lg w-lg border-3 p-6 text-normal z-1 flex flex-col">
            {signError && signError !== "" && <Message text={signError} />}
            {signSuccess && signSuccess !== "" && <Success text={signSuccess} />}
            <label className="label text-lg text-white" htmlFor="username">Username</label>
            <input
                value={state.username}
                onChange={setField("username")}
                onBlur={() => onBlur("username")}
                aria-invalid={isInvalid("username")}
                required
                type="username"
                className="input border-1 border-[yellow] w-full border-dashed "
                placeholder="Username"
                name="username"
                id="username"
                autoComplete="on"
            />
            {errors.username && <p className="text-red-500 small">{errors.username}</p>}
            <label className="label text-lg text-white" htmlFor="email">Email</label>
            <input
                value={state.email}
                onChange={setField("email")}
                onBlur={() => onBlur("email")}
                aria-invalid={isInvalid("email")}
                required type="email"
                className="input border-1 border-[yellow] w-full border-dashed "
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="on"
            />
            {errors.email && <p className="text-red-500 small">{errors.email}</p>}
            <div className="flex justify-center items-start gap-3">
                <div className="flex flex-col w-full">
                    <label className="label text-lg text-white" htmlFor="name">Nome</label>
                    <input
                        value={state.name}
                        onChange={setField("name")}
                        onBlur={() => onBlur("name")}
                        aria-invalid={isInvalid("name")}
                        required
                        type="text"
                        className="input border-1 border-[yellow] w-auto border-dashed"
                        placeholder="Nome"
                        name="name"
                        id="name"
                        autoComplete="on"
                    />
                    {errors.name && <p className="text-red-500 small">{errors.name}</p>}
                </div>
                <div className="flex flex-col w-full">
                    <label className="label text-lg text-white" htmlFor="surname">Cognome</label>
                    <input
                        value={state.surname}
                        onChange={setField("surname")}
                        onBlur={() => onBlur("surname")}
                        aria-invalid={isInvalid("surname")}
                        required
                        type="text"
                        className="input border-1 border-[yellow] w-auto border-dashed"
                        placeholder="Cognome"
                        name="surname"
                        id="surname"
                        autoComplete="on"
                    />
                    {errors.surname && <p className="text-red-500 small">{errors.surname}</p>}
                </div>
            </div>
            <label className="label text-lg text-white" htmlFor="password">Password</label>
            <div className="flex gap-5">
                <input
                    value={state.password}
                    onChange={setField("password")}
                    onBlur={() => onBlur("password")}
                    aria-invalid={isInvalid("password")}
                    required
                    type={pwdType}
                    className="input border-1 border-[yellow] w-full border-dashed"
                    placeholder="Password"
                    name="password"
                    id="password"
                    autoComplete="on"
                />
                <ShowPwdCheckbox setPwdType={setPwdType}/>
            </div>
            {errors.password && <p className="text-red-500 small">{errors.password}</p>}

            <button type="submit" >
                <FormBtn text={"Registrati"}/>  
            </button>
        </form>
    )
}

export default RegisterForm