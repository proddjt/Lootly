import z from 'zod';

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
const passwordError = "La password deve contenere almeno una minuscola, una maiuscola e un numero";

export const FormSchema = z.object({
    email: z.string().email("Formato email non valido"),
    name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
    surname: z.string().min(2, "Il cognome deve contenere almeno 2 caratteri"),
    username: z.string().min(3, "L'username deve contenere almeno 3 caratteri"),
    password: z.string().min(8, "La password deve contenere almeno 8 caratteri").regex(passwordRegex, { message: passwordError }),
})

export const FormSchemaLogin = z.object({
    email: z.string().email("Formato email non valido"),
    password: z.string(),
})

export const FormSchemaUpdate = z.object({
    name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
    surname: z.string().min(2, "Il cognome deve contenere almeno 2 caratteri"),
    username: z.string().min(3, "L'username deve contenere almeno 3 caratteri"),
})

export const ConfirmSchema = FormSchema.refine((data) => data)
export const ConfirmSchemaLogin = FormSchemaLogin.refine((data) => data)
export const ConfirmSchemaUpdate = FormSchemaUpdate.refine((data) => data)

export function getFieldError(schema ,property, value){
    const { error } = schema.shape[property].safeParse(value);
    return error ? error.issues.map((issue) => issue.message).join(", ") : undefined; 
} 

export const getErrors = (error) =>
    error.issues.reduce((all, issue) => {
        const path = issue.path.join("");
        const message = all[path] ? all[path] + ", " : "";
        all[path] = message + issue.message;
        return all;
    }

    )
