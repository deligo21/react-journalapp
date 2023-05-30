import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({

    palette: {
        primary: {
            main: '#2A2F4F',
        },
        secondary: {
            main: '#543884',
        },
        error: {
            main: red.A400,
        }
    }
});