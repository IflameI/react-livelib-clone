import React from 'react';
import {AppBar, Container, Stack} from "@mui/material";
import {HarnessLink, HarnessToolbar} from "./HarnessStyles";
import Grid from "@mui/material/Grid";
import logo from '../../assets/logo.svg'
import HarnessSearchBox from "./HarnessSearchBox";
import {router} from "../../app/routes/model";

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
							{router.map((route) => (
								<HarnessLink to={`${route.path}`} style={({isActive}) => ({fontWeight: isActive ? '700' : '400'})}>
									{route.title}
								</HarnessLink>
							))}
						</Stack>
					</Grid>
					<Grid item xs={2} sx={{textAlign: 'center'}}>
						<img src={logo} alt="company logo"/>
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
