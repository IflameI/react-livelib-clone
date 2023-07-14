import {lazy} from "react";
import {RouterType} from "../../../pages";

const MainPage = lazy(() => import("../../../pages/main"));


export enum RoutesLabelEnum {
	Main = 'Главная',
	Recommendation = 'Что почитать',
	NewsLine = 'Лента',
	Genres = 'Жанры',
	Authors = 'Авторы'
}

export enum RoutesLinkEnum {
	Main = '/',
	Recommendation = '/recommendation',
	NewsLine = '/newsline',
	Genres = '/genres',
	Authors = '/authors '
}

//TODO: рефакторинг
export const router: RouterType[] = [
	{
		title: RoutesLabelEnum.Main,
		path: RoutesLinkEnum.Main,
		children: <MainPage/>
	},
	{
		title: RoutesLabelEnum.Recommendation,
		path: RoutesLinkEnum.Recommendation,
		children: <></>
	},
	{
		title: RoutesLabelEnum.Authors,
		path: RoutesLinkEnum.Authors,
		children: <></>
	},
	{
		title: RoutesLabelEnum.Genres,
		path: RoutesLinkEnum.Genres,
		children: <></>
	},
	{
		title: RoutesLabelEnum.NewsLine,
		path: RoutesLinkEnum.NewsLine,
		children: <></>
	},
];
