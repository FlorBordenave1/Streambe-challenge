import {
    Avatar,
    UnstyledButton,
    Group,
    Text,
    createStyles,
    Menu,
} from "@mantine/core"

const useStyles = createStyles(() => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding: "20px 30px",
    },
}))

export const Navbar = ({ user, logOut }) => {
    const { classes } = useStyles()

    const role = user?.roles && user?.roles[0].split("_")[1]

    return (
        <header className={classes.header}>
            <Text display={"flex"}>
                Hello <Text fw={700}>{` ${user.name} ${user.lastname} `}</Text> !
            </Text>
            <Group>
                <Menu width={200} shadow="md">
                    <Menu.Target>
                        <Avatar radius="xl" />
                    </Menu.Target>

                    <Menu.Dropdown>

                        <Menu.Item
                            component="role"
                        >
                            {role}
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
                <UnstyledButton onClick={logOut}>
                    <Text color={"blue"}>Logout</Text>
                </UnstyledButton>
            </Group>
        </header>
    )
}
