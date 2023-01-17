import UsersContext from "./UsersContext"
import axios from "axios"
import { useState } from "react"

const UsersState = ({ children }) => {
    const [users, setUsers] = useState()

    const getUsers = async () => {
        try {
            const res = await axios.get(
                "https://www.mockachino.com/06c67c77-18c4-45/users"
            )
            setUsers(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <UsersContext.Provider
            value={{
                getUsers,
                users
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

export default UsersState
