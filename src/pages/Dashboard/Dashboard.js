import { useContext, useEffect } from "react"
import UsersContext from "../../context/UsersContext/UsersContext"
import AuthContext from "../../context/AuthContext/AuthContext"
import Table from "../../components/Table"
import { Box, Text, ScrollArea } from "@mantine/core"
import { Navbar } from "../../components/Navbar"

export const Dashboard = () => {
    const { getUsers, users } = useContext(UsersContext)
    const { userLogged, removeUserLogged } = useContext(AuthContext)

    const columns = ["Photo", 'Name', "Surname", "Birth Date", "Gender", "Email", "Phone", "Profession"];

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Box>
            <Navbar user={userLogged} logOut={removeUserLogged} />
            <Box p={"0px 30px"}>
                <Text fw={500} fz={"lg"} mb={12}>
                    Dashboard
                </Text>
                <ScrollArea>
                    <Table.Factory columns={columns} data={users?.users ?? []} />
                </ScrollArea>
            </Box>
        </Box>
    )
}
