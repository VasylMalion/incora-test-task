// components
import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";
import Articles from "./pages/articles/articles";
import SingleArticle from "./pages/single-article/single-article";
import Cabinet from "./pages/cabinet/cabinet";

export const privateRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/articles',
        component: Articles
    },
    {
        path: '/articles:id',
        component: SingleArticle
    },
    {
        path: '/cabinet',
        component: Cabinet
    }
];

export const publicRoutes = [
    {
        path: '/auth',
        component: Auth
    }
];