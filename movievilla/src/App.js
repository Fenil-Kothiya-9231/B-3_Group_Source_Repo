import {useEffect} from 'react';


//b9131d5c
const API_URL = 'http://www.omdbapi.com?apikey=b9131d5c';


const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        crossOriginIsolated.log(data.search);
    }

    useEffect(() => {
        searchMovies('Spiderman');


    }, []);
    return(
        <h1>Movie Villa</h1>
    );
}

export default App;