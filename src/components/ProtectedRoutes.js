import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard/Dashboard"
import AuthContext from "../context/AuthContext/AuthContext"

export const ProtectedRoutes = () => {
    const user = useContext(AuthContext)

    if (!user.userLogged) {
        return <Navigate to="/" />
    }

    return <Dashboard />
}
