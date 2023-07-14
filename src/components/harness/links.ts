import {RoutesLabelEnum, RoutesLinkEnum} from "../../app/routes/model";

export const Links: ({ name: RoutesLabelEnum; href: RoutesLinkEnum })[] = [
    {
        name: RoutesLabelEnum.Main,
        href: RoutesLinkEnum.Main,
    },
    {
        name: RoutesLabelEnum.Recommendation,
        href: RoutesLinkEnum.Recommendation,
    },
    {
        name: RoutesLabelEnum.NewsLine,
        href: RoutesLinkEnum.NewsLine,
    },
    {
        name: RoutesLabelEnum.Genres,
        href: RoutesLinkEnum.Genres,
    },
    {
        name: RoutesLabelEnum.Authors,
        href: RoutesLinkEnum.Authors,
    },
];
