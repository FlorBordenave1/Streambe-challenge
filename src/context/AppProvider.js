import { MantineProvider } from "@mantine/core";

export const AppProvider = ({ children }) => {
    return (
        <MantineProvider theme={{
            colors: {
                blue: ['#74A1D1', '', '', '', '', '', '#74A1D1', '#5E85AF', '', '#5E85AF'],
            },
        }}
        >
            {children}
        </MantineProvider>
    );
}; 