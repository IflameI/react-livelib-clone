import {Container, styled, Toolbar} from '@mui/material';


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

export const HarnessToolbar = styled(Toolbar)(({theme}) => ({
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
