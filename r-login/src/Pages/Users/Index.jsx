import { useContext } from 'react';
import { Router } from '../../Contexts/Router';
import Page404 from '../Page404';
import PageGate from '../Auth/PageGate';
import { UsersProvider } from '../../Contexts/Users';
import Create from './Create';


export default function Index({ to }) {

    const { params } = useContext(Router);

    let returnComponent = <Page404 />;

    if (to === 'register') {
        returnComponent = <Create />;
    }



    return (
        <UsersProvider>
            {returnComponent}
        </UsersProvider>
    );
}