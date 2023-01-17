import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .required("Password is required"),
})