import React, {FunctionComponent} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {BookCardTitle} from "../components/main/MainStyles";

interface BookCardProps {
}

const BookCard: FunctionComponent<BookCardProps> = (props) => {

	return (
		<Card sx={{borderRadius: '20px'}}>
			<CardMedia
				component="img"
				height="260"
				image="https://s1.livelib.ru/boocover/1007458282/200/26f7/boocover.jpg"
				alt="book"
			/>
			<CardContent>
				<BookCardTitle gutterBottom variant="body2">
					Я РМ. Проджект-менеджер: системный подход и лучшие практики
				</BookCardTitle>
				<Typography gutterBottom variant='body2'>Сергей Филимонов</Typography>
				<Typography variant='h6'>4,0</Typography>
			</CardContent>
			<CardActions sx={{justifyContent: 'center'}}>
				<Button variant='contained' sx={{borderRadius: '20px', width: '100%'}}>Добавить</Button>
			</CardActions>
		</Card>
	);
};

export default BookCard;
