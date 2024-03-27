import Nav from '../../Components/Nav';
import useGet from '../../Hooks/useGet';
import { useContext, useEffect } from 'react';
import { Router } from '../../Contexts/Router';
import * as icon from '../../Icons';
import { SERVER_URL } from '../../Constants/main';
import { useState } from 'react';
import usePost from '../../Hooks/usePost';



export default function Index() {


    const { params } = useContext(Router);

    const { data, loading } = useGet('/book/' + (params[0] || ''));

    const { data: rating, loading: ratingLoading } = useGet('/rating/' + (params[0] || '') + '/' + localStorage.getItem('userMark'));

    const { setSendData, returnData, loading: rateLoading, setPostUrl } = usePost();

    const [rate, setRate] = useState(0);

    const [afterRate, setAfterRate] = useState(null);

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

    useEffect(_ => {
        if (rate === 0) return;
        setSendData({ rate: rate });
        setPostUrl('/rating/' + book.id + '/' + localStorage.getItem('userMark'));
        setAfterRate({
            rate: +((rating.sum + rate) / (rating.votes + 1)).toFixed(1),
            votes: rating.votes + 1
        });
        setRate(0);
    }, [rate, setSendData, setPostUrl, book.id]);


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
                                        {
                                            !ratingLoading &&
                                            <>
                                                <h1>Book rating</h1>
                                                <div className="rating-box">
                                                    <div className="rating">
                                                        <div className="empty-stars"></div>
                                                        <div className="full-stars" style={{
                                                            width: afterRate !== null ? (afterRate.rate * 20) + '%' : rating.rate === null ? '0' : (rating.rate * 20) + '%'
                                                        }}></div>
                                                    </div>
                                                    {
                                                        rating.rate === null && afterRate === null &&
                                                        <span>0/5 (0)</span>
                                                    }
                                                    {
                                                        rating.rate !== null && afterRate === null &&
                                                        <span>{rating.rate}/5 ({rating.votes})</span>
                                                    }
                                                    {
                                                        afterRate !== null &&
                                                        <span>{afterRate.rate}/5 ({afterRate.votes})</span>
                                                    }
                                                    {
                                                        rating.canRate && afterRate === null &&
                                                        <select value={rate} onChange={e => setRate(+e.target.value)}>
                                                            <option value="0">Rate this book</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    }
                                                    {
                                                        afterRate !== null &&
                                                        <span>Thank you for rating</span>
                                                    }
                                                </div>
                                            </>
                                        }
                                        {
                                            ratingLoading &&
                                            <div className="element-loader" style={{ height: '100px' }}><div></div></div>
                                        }
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