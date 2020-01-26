/**
 * Created by Phugh on 26/01/2020.
 */
const baseUrl = "https://api.themoviedb.org/3/";
const searchMovieUrl = "search/movie?api_key=";
const searchTvUrl = "search/tv?api_key=";
const apiKey = "057284199444718faf6314cb69a872ab";

const searchTerm = window.location.href.split('?').pop();
    if (searchTerm !== ""){
        console.log("inside search")

        const movieUrl = "".concat(baseUrl,searchMovieUrl, apiKey, '&query=', searchTerm);
        const tvUrl = "".concat(baseUrl,searchTvUrl, apiKey, '&query=', searchTerm);

        const movieData = getMovies(movieUrl);
        const tvData = getTv(tvUrl);

        writeMovieList(movieData);
};

async function getMovies(url){
    const data = await fetch(url);
    return data.json();
};

async function getTv(url){
    const data = await fetch(url);
    return data.json();
};

function writeMovieList(data){
    console.log("inside write")
    data.then(data => {
        const results = data.results;
        const el = $('#movieList');
        const list = results.map(result => {
                return `<li>${result.title}</li>`;
            }
        )
        el.html(list);
        console.log(list);
    })


}