import Layout from './Layout';
import { AuthorsProvider } from '../../Contexts/Authors';

export default function Index() {

    return (
        <AuthorsProvider>
            <Layout />
        </AuthorsProvider>
    )
}