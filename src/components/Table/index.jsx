import { Avatar, createStyles, Table } from "@mantine/core"
import moment from "moment"

const useStyles = createStyles(theme => ({
    thead: {
        backgroundColor: theme.colors.gray[2],
    },
}))

const TableFactory = ({ columns, data }) => {
    const { classes } = useStyles()

    const rows = data.map((user, i) => (
        <tr key={i}>
            <td>
                <Avatar radius="xl" src={user.photo} alt={user.name} />
            </td>
            <td>{user.name}</td>
            <td> {user.surnames} </td>
            <td> {moment(user.birthDate).format("MMMM DD, YYYY")}</td>
            <td>{user.gender}</td>
            <td> {user.email}</td>
            <td> {user.phone} </td>
            <td> {user.profesion} </td>
        </tr>
    ))

    return (
        <Table withBorder withColumnBorders>
            <thead className={classes.thead}>
                <tr>
                    {columns.map((column, i) => (
                        <th key={i}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    )
}

Table.Factory = TableFactory

export default Table
