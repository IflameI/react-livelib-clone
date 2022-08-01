import React from 'react';
import {AppBar, Container} from "@mui/material";
import {HarnessToolbar} from "./HarnessStyles";
import Grid from "@mui/material/Grid";

const HarnessAppBar = () => {

    return (

            <AppBar
                    position="fixed"
                    sx={{bgcolor: '#fff', boxShadow: 'unset', borderBottom: '1px solid rgba(231, 231, 231, 1)'}}
            >
                <Container maxWidth={false}>
                    <HarnessToolbar>
                        <Grid sx={{flex: '1 1 75%'}}>
                            123
                        </Grid>
                    </HarnessToolbar>
                </Container>
            </AppBar>
    );
};

export default HarnessAppBar;
