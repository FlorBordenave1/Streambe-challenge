import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Input, Text, PasswordInput } from "@mantine/core"
import { Formik, Form, ErrorMessage } from "formik"
import AuthContext from "../../context/AuthContext/AuthContext"
import { loginSchema } from "./login.schema"

export const LoginForm = () => {
    const { addUserLogged } = useContext(AuthContext)

    const [errorMesage, setErrorMesage] = useState(false)

    let navigate = useNavigate()

    const initialValues = {
        email: "",
        password: "",
    }

    const onSubmit = (values, { setSubmitting }) => {
        const { email, password } = values
        setSubmitting(true)
        if (email === "tom.manchini@yopmail.com" && password === "1234") {
            addUserLogged()
            setErrorMesage(false)
            setTimeout(() => {
                navigate("/home")
            }, [1000])
        } else {
            setSubmitting(false)
            setErrorMesage(true)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginSchema}
        >
            {({
                isSubmitting,
                errors,
                touched,
                values,
                handleBlur,
                handleChange,
            }) => (
                <Form>
                    <Input.Wrapper
                        label="Email"
                        required
                        error={touched.name && errors.name}
                        m={"15px 0px 15px 0px"}
                    >
                        <Input
                            name="email"
                            placeholder="Enter your Email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            invalid={Boolean(touched.email && errors.email)}
                        />
                        <ErrorMessage
                            name="email"
                            render={msg => (
                                <Text fz={"xs"} color={"red"}>
                                    {msg}
                                </Text>
                            )}
                        />
                    </Input.Wrapper>

                    <Input.Wrapper label="Password" required m={"15px 0px"}>
                        <PasswordInput
                            name="password"
                            placeholder="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            invalid={Boolean(touched.password && errors.password)}
                        />
                        <ErrorMessage
                            name="password"
                            render={msg => (
                                <Text fz={"xs"} color={"red"}>
                                    {msg}
                                </Text>
                            )}
                        />
                        {errorMesage ? (
                            <Text color={"red"}>Incorrect email address or password</Text>
                        ) : null}
                    </Input.Wrapper>

                    <Button type="submit" loading={isSubmitting} color="blue" w="100%">
                        Log In
                    </Button>
                </Form>
            )}
        </Formik>
    )
}