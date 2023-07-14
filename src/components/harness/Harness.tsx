import React, {FunctionComponent} from 'react';
import HarnessAppBar from './HarnessAppBar';
import {DrawerHeader, Main} from "./HarnessStyles";

interface IHarness {
	children: React.ReactNode
}

const Harness: FunctionComponent<IHarness> = (props) => {

	return (
		<>
			<HarnessAppBar/>
			<DrawerHeader/>
			<Main maxWidth={'lg'}>
				{props.children}
			</Main>
		</>
	);
};

export default Harness;
