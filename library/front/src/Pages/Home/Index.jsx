import Layout from './Layout';
import { HomeProvider } from '../../Contexts/Home';

export default function Index() {

    return (
        <HomeProvider>
            <Layout />
        </HomeProvider>
    )
}