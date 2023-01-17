import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Text, Image, Center } from "@mantine/core"
import AuthContext from "../../context/AuthContext/AuthContext"
import { LoginForm } from "../../components/LoginForm/index"
import login from "../../assets/img/login.png"
import "./Login.css"

export const Login = () => {
    const { userLogged } = useContext(AuthContext)

    let navigate = useNavigate()

    useEffect(() => {
        if (userLogged !== null) {
            navigate("/home")
        }
    }, [])

    return (
        <Center style={{ height: "100vh" }}>
            <Box className="login-container">
                <Box maw={"35%"} p={20} className="login-image">
                    <Image src={login} alt="login image" />
                </Box>

                <Box p={30} w={"30%"} className="login-container-form">
                    <Text fw={500} fz="xl">
                        Login
                    </Text>
                    <LoginForm />
                </Box>
            </Box>
        </Center>
    )
}
