import InputField from "../components/InputField.tsx";
import {useFormik} from "formik";
import * as yup from "yup";

const RegisterForm = () => {
    const INIT_VALUE = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",

    }

    const registerSchema = yup.object({
        firstname: yup.string().required("Vorname bitte ausfüllen").min(3, "Länger wie drei"),
        lastname: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })


    const formik = useFormik({
        initialValues: INIT_VALUE,
        validateOnChange: false,
        validationSchema: registerSchema,
        onSubmit: values => {
            console.log("on submit,", values)

            formik.resetForm()
        }
    })

    return <div>
        <h4>Register new User</h4>
        <form onSubmit={ formik.handleSubmit }>
            <InputField fieldName={ "firstname" }
                        label={ "Vorname" }
                        onChange={ formik.handleChange }
                        placeholder={ "First Name" }
                        value={ formik.values.firstname }
                        error={ formik.errors.firstname }/>

            <InputField fieldName={ "lastname" }
                        label={ "Nachname" }
                        onChange={ formik.handleChange }
                        placeholder={ "Last Name" }
                        value={ formik.values.lastname }
                        error={ formik.errors.lastname }/>

            <InputField fieldName={ "email" }
                        onChange={ formik.handleChange }
                        placeholder={ "Email" }
                        value={ formik.values.email }
                        error={ formik.errors.email }/>

            <InputField fieldName={ "password" }
                        type={ "password" }
                        onChange={ formik.handleChange }
                        placeholder={ "password" }
                        value={ formik.values.password }
                        error={ formik.errors.password }/>

            <button type={ "submit" }>Registrieren</button>
        </form>

    </div>
}

export default RegisterForm