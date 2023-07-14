import React from 'react';
import {CircularProgress} from "@mui/material";
import {CircularProgressProps} from "@mui/material/CircularProgress/CircularProgress";

const Loader: React.FC<CircularProgressProps> = (props) => {

	return (
		<CircularProgress size={40} sx={{color: '#3E99ED'}} {...props}/>
	);
};

export default Loader;
