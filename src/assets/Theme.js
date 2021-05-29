import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#fbc12d',
            light: '#fff363',
            dark: '#c49100'
        },
        secondary: {
            main: '#009600',
            light: '#53c83f',
            dark: '#006600'
        },

        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f'
        },
        contrastThreshold: 3,
    },

    props: {
        Link: {
            underlined: 'never',
        },

        MuiButton: {},

        MuiCard: {
            elevation: 0,
        },
    },

    overrides: {
        Link: {
            textDecoration: 'none',
        },
    },
});
theme.overrides.MuiCard = {};
export default theme;
