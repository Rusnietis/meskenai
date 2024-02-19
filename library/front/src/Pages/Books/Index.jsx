import Layout from './Layout';
import { BooksProvider } from '../../Contexts/Books';

export default function Index() {

    return (
        <BooksProvider>
            <Layout />
        </BooksProvider>
    )
}