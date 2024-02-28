import { useContext, useEffect, useRef, useState } from 'react';
import { Heroes } from '../../Contexts/Heroes';
import useBooksDropdown from '../../Hooks/useBooksDropdown';
import useImage from '../../Hooks/useImage';


export default function Edit() {

    const { editHero, setEditHero, setUpdateHero } = useContext(Heroes);

    const [inputs, setInputs] = useState(editHero);

    const [deleteImage, setDeleteImage] = useState(false);  

    const { booksDropdown } = useBooksDropdown();

    const { image, readImage, setImage } = useImage();

    const imageInput = useRef();


    useEffect(_ => {
        setImage(editHero?.image);
    }, [editHero, setImage]);


    useEffect(_ => {
        if (image && deleteImage) {
            setDeleteImage(false);
        }
    }, [image, deleteImage, setDeleteImage]);


    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const submit = _ => {

        const imageToServer = image !== editHero.image ? image : null;

        const author = {
            surname: booksDropdown.find(book => book.id === +inputs.book_id).surname,
            name: booksDropdown.find(book => book.id === +inputs.book_id).name
        }
        const book = {
            title: booksDropdown.find(book => book.id === +inputs.book_id).title
        }
        setUpdateHero({ ...editHero, ...inputs, old: editHero, author, book, image: imageToServer, del: deleteImage });
        setEditHero(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditHero(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="good" className="form-label">Good/Bad</label>
                            <h5 style={{ cursor: 'pointer', display: inputs.good ? 'block' : 'none' }} onClick={_ => handleChange({ target: { value: 0, id: 'good' } })}>Good</h5>
                            <h5 style={{ cursor: 'pointer', display: inputs.good ? 'none' : 'block' }} onClick={_ => handleChange({ target: { value: 1, id: 'good' } })}>Bad</h5>
                        </div>
                        {
                            booksDropdown &&
                            <div className="mb-3">
                                <label htmlFor="book_id" className="form-label">Book</label>
                                <select className="form-select" id="book_id" value={inputs.book_id} onChange={handleChange}>
                                    <option value="">Select book</option>
                                    {
                                        booksDropdown.map(book => <option key={book.id} value={book.id}>{book.title}</option>)
                                    }
                                </select>
                            </div>
                        }

                        <div className="mb-3">
                            <label className="form-label">
                                <span>Image</span>
                                <h6 style={{ cursor: 'pointer', marginLeft: '10px', display: image ? 'inline-block' : 'none' }} onClick={_ => {
                                    setDeleteImage(true);
                                    setImage(null);
                                    imageInput.current.value = null;
                                }}>Delete</h6>
                            </label>
                            <input ref={imageInput} type="file" className="form-control" onChange={readImage} />
                        </div>
                        {
                            image &&
                            <div className="mb-3">
                                <img src={image} alt={editHero.name} className="img-fluid" />
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setEditHero(null)}>Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}