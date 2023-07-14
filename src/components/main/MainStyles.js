import {styled, Typography} from '@mui/material';

export const BookCardTitle = styled(Typography)(() => ({
	fontWeight: '700',
	display: '-webkit-box',
	'-webkit-line-clamp': '2',
	'-webkit-box-orient': 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
}));
