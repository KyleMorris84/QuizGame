import { useState, useEffect } from 'react'
import '../Styling/StartButton.css'
import { API_BASE_URL } from "../../config.js";

export default function GenreSelection(props) {

    const [genres, setGenres] = useState([]);

    async function loadGenres() {
        const response = await fetch(`${API_BASE_URL}/api/genres`)
        if (response.ok) {
            const data = await response.json();
            setGenres(data);
        }
    }

    useEffect(() => {
        loadGenres()
    }, [])

    console.log(genres)

    return (
        <div id="genres">
            <div className="btndiv">
                {
                    genres.length > 0
                        ? genres.map(genre => <div key={genre.id} className="btn" onClick={() => props.selectGenre(genre)}>{genre.name}</div>)
                        : <p>Nothing yet...</p>
                }
            </div>
        </div>
    )
}