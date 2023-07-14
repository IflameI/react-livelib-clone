import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import Loader from "../../shared/ui/Loader";
import {Stack} from "@mui/material";

export const withRouter = (component: () => React.ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback={
			<Stack sx={{height: '100vh'}} direction='row' alignItems='center' justifyContent='center'>
				<Loader/>
			</Stack>}>
			{component()}
		</Suspense>
	</BrowserRouter>
);
