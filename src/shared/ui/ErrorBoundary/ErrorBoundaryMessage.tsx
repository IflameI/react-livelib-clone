import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import React from 'react';

const ErrorBoundaryMessage: React.FC = () => {
	return (
		<Grid container direction="column" justifyContent="center" alignItems="center" sx={{minHeight: '100vh'}}>
			<Grid item xs="auto">
				<Typography variant="h5" component="h1" sx={{textAlign: 'center', textTransform: 'uppercase'}}>
					Что-то пошло не так
				</Typography>
			</Grid>
		</Grid>
	)
}

export default ErrorBoundaryMessage;
