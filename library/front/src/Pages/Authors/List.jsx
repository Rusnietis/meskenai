import { useContext } from "react";
import { Authors } from "../../Contexts/Authors";

export default function List() {

    const { authors } = useContext(Authors);


    return (
        <>
            {
                authors.map((author, index) => (
                    <div key={index} className="card mt-2">
                        <div className="card-header">
                            <h4>{author.name} {author.surname}</h4>
                        </div>
                        <div className="card-body">
                            <p>Nickname: {author.nickname}</p>
                            <p>Born: {new Intl.DateTimeFormat('lt-LT').format(new Date(author.born))}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger m-2">Delete</button>
                            <button type="button" className="btn btn-warning m-2">Edit</button>
                        </div>
                    </div>
                ))
            }
        </>
    );

}