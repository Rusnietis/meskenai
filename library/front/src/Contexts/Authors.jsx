import { createContext, useReducer } from 'react';


import authorsReducer from '../Reducers/authorsReducer';
import useAuthors from '../Hooks/useAuthors';

export const Authors = createContext();

export const AuthorsProvider = ({ children }) => {

    const [authors, dispachAuthors] = useReducer(authorsReducer, null);

    const { createAuthor, setCreateAuthor, editAuthor, setEditAuthor, deleteAuthor, setDeleteAuthor } = useAuthors(dispachAuthors);

    return (
        <Authors.Provider value={{
            authors, dispachAuthors,
            createAuthor, setCreateAuthor,
            editAuthor, setEditAuthor,
            deleteAuthor, setDeleteAuthor
        }}>
            {children}
        </Authors.Provider>
    );
}