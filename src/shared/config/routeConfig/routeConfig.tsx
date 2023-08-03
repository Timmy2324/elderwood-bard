import { AboutPage } from "@/pages/AboutPage"
import { MainPage } from "@/pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    Main = 'main',
    About = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
}

export const routeConfig: RouteProps[] = [
    {
        path: AppRoutes.Main,
        element: <MainPage/>
    },
    {
        path: AppRoutes.About,
        element: <AboutPage/>
    }
]