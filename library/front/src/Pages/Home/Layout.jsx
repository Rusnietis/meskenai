import Nav from '../../Components/Nav';
import { Home } from '../../Contexts/Home';

import { useContext } from 'react';



export default function Layout() {

    const { home } = useContext(Home);

    return (
        <>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-8 mt-4">
                        stats
                    </div>
                </div>
            </div>

        </>
    );
}