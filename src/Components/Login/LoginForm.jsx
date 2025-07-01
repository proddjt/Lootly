import { useState } from "react"
import { FormSchemaLogin, ConfirmSchemaLogin, getErrors, getFieldError } from "../../lib/validationForm";
import supabase from "../../supabase/supabase-client";
import { useNavigate } from "react-router";

import FormBtn from "../Register/FormBtn"
import Message from "../Message";
import Success from "../Success";
import ShowPwdCheckbox from "../Register/ShowPwdCheckbox";

function LoginForm(){
    const [pwdType, setPwdType] = useState('password');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const [signError, setSignError] = useState('')
    const [signSuccess, setSignSuccess] = useState('')
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const { error, data } = ConfirmSchemaLogin.safeParse(state);
        if (error) {
            const errors = getErrors(error);
            setErrors(errors);
        } else {
            let { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            })
            if (error) {
                setSignError("Credenziali non valide!")
                setTimeout(() => {
                    setSignError('')
                }, 5000);
            } else {
                setSignSuccess("Login avvenuto con successo")
                await new Promise((resolve) => setTimeout(resolve, 3000));
                navigate("/catalog")
            }
        }
    }
    const onBlur = (p) => {
        const message = getFieldError(FormSchemaLogin, p, state[p])
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

        <form onSubmit={onSubmit} noValidate className="fieldset bg-black border-[yellow] rounded-lg md:w-lg w-full border-3 p-6 text-normal z-1 flex flex-col">
            {signError && signError !== "" && <Message text={signError} />}
            {signSuccess && signSuccess !== "" && <Success text={signSuccess} />}
            
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
                <FormBtn text={"Accedi"}/>  
            </button>
        </form>
    )
}

export default LoginForm