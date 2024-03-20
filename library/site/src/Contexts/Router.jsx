import { createContext, useEffect, useState } from 'react';

import Page404 from '../Pages/Page404.jsx';
import Page401 from '../Pages/Page401.jsx';
import Page503 from '../Pages/Page503.jsx';
import PageUps from '../Pages/PageUps.jsx';

import HomeIndex from '../Pages/Home/Index.jsx';
import HeroIndex from '../Pages/Hero/Index.jsx';
import HeroesList from '../Pages/Heroes/Index.jsx';

export const Router = createContext();

export const RouterProvider = () => {

    const [route, setRoute] = useState(_ => {
        const hash = window.location.hash || '#home';
        return hash.split('/').shift();
    });
    const [params, setParams] = useState(_ => {
        const hash = window.location.hash.split('/');
        hash.shift();
        return hash;
    });

    const [errorPageType, setErrorPageType] = useState(null);

    useEffect(_ => {
        const handleHashChange = _ => {
            const hash = window.location.hash.split('/');
            setRoute(hash.shift());
            setParams(hash);
        }
        window.addEventListener('hashchange', handleHashChange);
        return _ => window.removeEventListener('hashchange', handleHashChange);
    }, []);


    const routes = [
        { path: '#home', component: <HomeIndex /> },
        { path: '#hero', component: <HeroIndex /> },
        { path: '#heroes', component: <HeroesList /> },

    ];

    const errorPages = [
        { type: 503, component: <Page503 /> },
        { type: 401, component: <Page401 /> },
        { type: 'ups', component: <PageUps /> }
    ];

    const routeComponent = routes.find(r => r.path === route)?.component || <Page404 />;
    const errorComponent = errorPages.find(e => e.type === errorPageType)?.component || null;

    return (
        <Router.Provider value={{ params, setErrorPageType }}>
            {errorComponent || routeComponent}
        </Router.Provider>
    );
}