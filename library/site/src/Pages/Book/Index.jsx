import Nav from '../../Components/Nav';
import useGet from '../../Hooks/useGet';
import { useContext } from 'react';
import { Router } from '../../Contexts/Router';
import * as icon from '../../Icons';
import { SERVER_URL } from '../../Constants/main';
import { useState } from 'react';



export default function Index() {


    const { params } = useContext(Router);

    const { data, loading } = useGet('/book/' + (params[0] || ''));

    const {rating, ratingLoading} = useGet('/rating/' + (params[0] || '') + '/' + localStorage.getItem('userMark'));

    const [rate, setRate] = useState(0);

    const heroes = data => {
        const h = [];
        data.forEach(item => {
            h.push({ id: item.hero_id, name: item.hero, good: item.good, image: item.image });
        });
        return h;
    }

    const book = data === null ? {} :
        {
            id: data[0].id,
            title: data[0].title,
            genre: data[0].genre,
            pages: data[0].pages,
            name: data[0].name,
            surname: data[0].surname,
            heroes: heroes(data)
        }


    if (loading) return (<div className="loader"><div></div></div>);

    return (
        <>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Book</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h3><span>{book.title}</span></h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <p><strong>Author:</strong> {book.name} {book.surname}</p>
                                        <p><strong>Genre:</strong> {book.genre}</p>
                                        <p><strong>Pages:</strong> {book.pages}</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h5>Heroes</h5>
                                                </div>
                                                {book.heroes.map(hero => (
                                                    <div className="col-4 heroes-list" key={hero.id}>
                                                        {hero.image === null && <img src={SERVER_URL + '/images/no.jpg'} alt={hero.name} style={{ maxWidth: '300px' }} className="img-thumbnail" />}
                                                        {hero.image && <img src={SERVER_URL + '/' + hero.image} alt={hero.name} style={{ maxWidth: '300px' }} className="img-thumbnail" />}
                                                        <p>{hero.name}</p>
                                                        <span className={'icon ' + (hero.good ? 'good' : 'bad')}>{hero.good ? icon.good : icon.bad}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <h1>Book rating</h1>
                                        <div className="rating-box">
                                            <div className="rating">
                                                <div className="empty-stars"></div>
                                                <div className="full-stars" style={{ width: '90%' }}></div>
                                            </div>
                                            <span>4.5/5 (28)</span>
                                            <select value={rate} onChange={e => setRate(e.target.value)}>
                                                <option value="0">Rate this book</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}