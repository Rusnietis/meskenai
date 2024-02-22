import Nav from '../../Components/Nav';
import { Heroes } from '../../Contexts/Heroes';
import Create from './Create';
import Delete from './Delete';
import List from './List';
import Edit from './Edit'
import { useContext } from 'react';



export default function Layout() {

    const { editHero, deleteHero } = useContext(Heroes);

    return (
        <>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Heroes</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <Create />
                    </div>
                    <div className="col-8 mt-4">
                        <List />
                    </div>
                </div>
            </div>
            {editHero && <Edit />}
            {deleteHero && <Delete />}
        </>
    );
}