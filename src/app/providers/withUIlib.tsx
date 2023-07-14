import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import React from "react";
import {theme} from "../../theme/defaultTheme";

export const withUIlib = (component: () => React.ReactNode) => () => (
	<>
		<CssBaseline/>

		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				{component()}
			</ThemeProvider>
		</StyledEngineProvider>
	</>
);
