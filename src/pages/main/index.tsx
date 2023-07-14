import React, {FunctionComponent} from 'react';
import {Stack} from "@mui/material";
import NewBooks from "../../components/main/NewBooks";

const MainPage: FunctionComponent = () => {

	return (
		<Stack spacing={1}>
			<NewBooks/>
		</Stack>
	);
};

export default MainPage
