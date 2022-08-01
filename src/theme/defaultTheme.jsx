import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: [
			'Rubik',
			'Montserrat',
			'sans-serif',
		].join(','),
	},
	palette: {
		type: 'light',
		primary: {
			main: '#3E99ED',
		},
		secondary: {
			main: '#E6E9F0',
		},
	},
	components: {},
});
