/**
 * Created by Phugh on 03/02/2020.
 */
export const baseUrl = "https://api.themoviedb.org/3/";
export const imageBaseUrl = "https://image.tmdb.org/t/p/";
export const carouselImageSize = "w342/";
export const movieDetailsImageSize = "w780/";
export const searchResultsImageSize = "w342/";
export const apiKey = "057284199444718faf6314cb69a872ab";

export const nowPlayingParams = {
    "el": $('#now-playing-carousel'),
    "className": "now-playing-item",
    "nextArrow": $(".np-next"),
    "prevArrow": $(".np-prev")
}

export const comingSoonParams = {
    "el": $('#coming-soon-carousel'),
    "className": "coming-soon-item",
    "nextArrow": $(".cs-next"),
    "prevArrow": $(".cs-prev")
}