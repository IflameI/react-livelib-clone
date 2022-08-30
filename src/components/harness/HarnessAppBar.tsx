import React from 'react';
import {AppBar, Container, Stack} from "@mui/material";
import {HarnessLink, HarnessToolbar} from "./HarnessStyles";
import Grid from "@mui/material/Grid";
import {SECTIONS} from "./sections";
import logo from '../../assets/logo.svg'
import HarnessSearchBox from "./HarnessSearchBox";

const HarnessAppBar = () => {

	return (

		<AppBar
			position="fixed"
			sx={{bgcolor: '#fff', boxShadow: 'unset', borderBottom: '1px solid rgba(231, 231, 231, 1)'}}
		>
			<Container maxWidth={"lg"}>
				<HarnessToolbar container justifyContent={'space-between'} alignItems={'center'}>
					<Grid item xs={4}>
						<Stack spacing={2.5} direction='row'>
							{SECTIONS.map((section) => (
								<HarnessLink to={`${section.href}`}>
									{section.name}
								</HarnessLink>
							))}
						</Stack>
					</Grid>
					<Grid item xs={2}>
						<img src={logo} alt="logo company"/>
					</Grid>
					<Grid item xs={4}>
						<HarnessSearchBox/>
					</Grid>
				</HarnessToolbar>
			</Container>
		</AppBar>
	);
};

export default HarnessAppBar;
