/**
 * Created by Phugh on 28/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, movieDetailsImageSize} from './config.js';
import {getApi, getDateString} from './sharedFunctions.js';

const movieId = window.location.href.split('?').pop();
const movieDetailsUrl = baseUrl.concat("movie/", movieId, "?api_key=", apiKey, "&language=en-US");
const creditsUrl = baseUrl.concat("movie/", movieId, "/credits?api_key=", apiKey, "&language=en-US");
const movieDetailsData = getApi(movieDetailsUrl);

writeMovieDetails(movieDetailsData);
writeCredits();

function writeCredits(){
    const data = getApi(creditsUrl);
    data.then(data => {
        const crew = data.crew;
        const director = crew[crew.findIndex(item => item.job === "Director")].name;
        $("#director").append(director);
        const cast = data.cast.slice(0, 3);
        const castNames = cast.map(item => {
            return item.name;
        })
        $("#cast").append(`${castNames.join(", ")}`);
    })
}

function writeMovieDetails(data){
    data.then(data => {
        const date = getDateString(data.release_date);

        var el = $("#poster");
        el.append(`<img src="${imageBaseUrl.concat(movieDetailsImageSize,data.poster_path)}">`);
        var el = $("#movie-title");
        el.append(`<h4>${data.title}</h4>`);
        var el = $("#movie-overview");
        el.append(`<p>${data.overview}</p>`);
        var el = $("#runtime");
        el.append(`${data.runtime.toString().concat("mins")}`);
        var el = $("#release-date");
        el.append(date);


    })
};
