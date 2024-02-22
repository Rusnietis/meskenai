import Layout from './Layout';
import { HeroesProvider } from '../../Contexts/Heroes';

export default function Index() {

    return (
        <HeroesProvider>
            <Layout />
        </HeroesProvider>
    )
}