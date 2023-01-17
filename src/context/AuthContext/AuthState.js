import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import axios from "axios"

const AuthState = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user") ?? null
    })

    const addUserLogged = async () => {
        try {
            const res = await axios.get(
                "https://www.mockachino.com/06c67c77-18c4-45/login"
            )
            setUser(res.data)
            localStorage.setItem("user", JSON.stringify(res.data))
        } catch (e) {
            console.error(e)
        }
    }

    const removeUserLogged = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")))
            setIsAuthenticated(true)
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                userLogged: user,
                addUserLogged,
                removeUserLogged,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
