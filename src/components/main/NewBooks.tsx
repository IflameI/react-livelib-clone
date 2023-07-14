import React, {FunctionComponent} from 'react';
import {Typography} from "@mui/material";
import BookCard from "../../common/BookCard";
import Grid from "@mui/material/Grid";


const NewBooks: FunctionComponent = () => {

	return (
		<section>
			<Typography variant="h4" component="div">
				Новинки книг
			</Typography>
			<Grid container spacing={1.5} sx={{marginBottom: '10px'}}>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
				<Grid item xs={2}>
					<BookCard/>
				</Grid>
			</Grid>
		</section>
	);
};

export default NewBooks;
