/**
 * Created by Phugh on 28/01/2020.
 */
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "057284199444718faf6314cb69a872ab";

const movieId = window.location.href.split('?').pop();

const movieDetailsUrl = baseUrl.concat("movie/", movieId, "?api_key=", apiKey, "&language=en-US");
const movieDetailsData = getMovieDetails(movieDetailsUrl);

writeMovieDetails(movieDetailsData);

async function getMovieDetails(url){
    const data = await fetch(url);
    return data.json();
};

function writeMovieDetails(data){
   console.dir(data);
   data.then(data => {
        const el = $("#movie-details");
        el.append(`<p>${data.overview}</p>`);
   })
};