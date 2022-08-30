import {Container, styled} from '@mui/material';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';


export const DrawerHeader = styled('div')(({theme}) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

export const Main = styled(Container, {
	shouldForwardProp: (prop) =>
		prop !== 'true' && prop !== 'false',
	name: 'MuiHarnessContainer',
	slot: 'Root',

})(({theme}) => ({
	marginTop: '15px',
	'&&': {
		overflowX: 'hidden',
		width: '100%',
		padding: '0 20px',
	},
	[theme.breakpoints.up('sm')]: {
		'&&': {
			width: `calc(100% - ${theme.spacing(9)} - 1px)`,
		},
	},
}));

export const HarnessToolbar = styled(Grid)(({theme}) => ({
	'&&': {
		padding: '15px 3px 15px 3px',
	},
	[theme.breakpoints.up('sm')]: {
		'&&': {
			paddingLeft: '30px',
			paddingRight: '30px',
		},
	},
}));

export const HarnessLink = styled(Link)(({theme}) => ({
	textDecoration: 'none',
	color: '#000',
	fontSize: '14px',
}));
