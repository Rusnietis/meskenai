import { useContext, useState } from 'react';
import { Books } from '../../Contexts/Books';
import useAuthorsDropdown from '../../Hooks/useAuthorsDropdown';

const defaultInputs = {
    title: '',
    pages: '',
    genre: '',
    author_id: '',
};

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const { authorsDropdown } = useAuthorsDropdown();

    const { setStoreBook } = useContext(Books);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const create = _ => {
        const author = {
            surname: authorsDropdown.find(author => author.id === +inputs.author_id).surname,
            name: authorsDropdown.find(author => author.id === +inputs.author_id).name
        }
        setStoreBook({...inputs, author});
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h3>Create Book</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={inputs.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pages" className="form-label">Total pages</label>
                    <input type="text" className="form-control" id="pages" value={inputs.pages} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input type="text" className="form-control" id="genre" value={inputs.genre} onChange={handleChange} />
                </div>
                {
                    authorsDropdown &&
                    <div className="mb-3">
                        <label htmlFor="author_id" className="form-label">Author</label>
                        <select className="form-select" id="author_id" value={inputs.author_id} onChange={handleChange}>
                            <option value="">Select author</option>
                            {
                                authorsDropdown.map(author => <option key={author.id} value={author.id}>{author.name} {author.surname}</option>)
                            }
                        </select>
                    </div>
                }
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    );
}