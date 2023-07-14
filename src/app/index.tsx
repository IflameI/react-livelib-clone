import {withProviders} from "./providers";
import {Routing} from "../pages";
import React from "react";
import {router} from "./routes/model";

const App = () => {
	return (
		<Routing router={router}/>
	)
}

export default withProviders(App)
