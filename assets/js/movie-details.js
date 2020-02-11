/**
 * Created by Phugh on 28/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, carouselImageSize} from './config.js';

const movieId = window.location.href.split('?').pop();
const movieDetailsUrl = baseUrl.concat("movie/", movieId, "?api_key=", apiKey, "&language=en-US");
const creditsUrl = baseUrl.concat("movie/", movieId, "/credits?api_key=", apiKey, "&language=en-US");
const movieDetailsData = getMovieDetails(movieDetailsUrl);

writeMovieDetails(movieDetailsData);
writeCredits();

async function getMovieDetails(url){
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
};

async function getCredits(url){
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
};

function writeCredits(){
    const data = getCredits(creditsUrl);
    data.then(data => {
            const crew = data.crew;
            const director = crew[crew.findIndex(item => item.job === "Director")].name;
            $("#director").append(director);
            const cast = data.cast.slice(0, 3);
            const castNames = cast.map(item => {
                return item.name;
            })
        $("#cast").append(`<span>${castNames.join(", ")}</span>`);
    })

}

function writeMovieDetails(data){
   data.then(data => {
        var el = $("#poster");
        el.append(`<img src="${imageBaseUrl.concat(carouselImageSize,data.poster_path)}">`);
        var el = $("#movie-title");
        el.append(`<h4>${data.title}</h4>`);
        var el = $("#movie-overview");
        el.append(`<p>${data.overview}</p>`);
   })
};

