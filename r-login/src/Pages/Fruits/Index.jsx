import { useContext } from 'react';
import { Router } from '../../Contexts/Router';
import Page404 from '../Page401';
import List from './List';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
import { FruitsProvider } from '../../Contexts/Fruits';


export default function Index() {

    const { params } = useContext(Router);

    let returnComponent = <Page404 />;

    if (params.length === 0) {
        returnComponent = <List />;

    } else if (params.length === 1 && params[0] === 'create') {
        returnComponent = <Create />;

    } else if (params.length === 2 && params[0] === 'edit') {
        returnComponent = <Edit />;

    } else if (params.length === 2 && params[0] === 'delete') {
        returnComponent = <Delete />;
    }

    return (
        <FruitsProvider>
            {returnComponent}
        </FruitsProvider>
    );
}