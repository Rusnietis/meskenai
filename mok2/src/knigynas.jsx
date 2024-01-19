import { BooksDataProvider } from "./Components/books/BooksData";
import BooksList from "./Components/books/BooksList";
import Top from "./Components/books/Top";
import './books.scss'

export default function App() {

    return (
        <BooksDataProvider>
            <section>
                <div className="container">
                    <Top />
                </div>
            </section>
            <section>
                <div className="container">
                    <BooksList />
                </div>
            </section>
        </BooksDataProvider>
    );
}