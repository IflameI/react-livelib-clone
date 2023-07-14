import {Route, Routes, useLocation} from "react-router-dom";
import Harness from "../components/harness/Harness";
import ErrorBoundary from "../shared/ui/ErrorBoundary";
import React, {lazy} from "react";

const NotFoundPage = lazy(() => import("./404"));

export type RouterType = {
	title: string,
	path: string,
	children: React.ReactNode,
}

interface IRouting {
	router: RouterType[]
}

export const Routing: React.FC<IRouting> = ({router}) => {
	const location = useLocation();

	return (
		<ErrorBoundary key={location.pathname}>
			<Routes>
				{router.map((route) => (
					<Route path={route.path} element={
						<Harness>
							{route.children}
						</Harness>}
					/>
				))}
				<Route path='*' element={<NotFoundPage/>}/>
			</Routes>
		</ErrorBoundary>
	);
};
