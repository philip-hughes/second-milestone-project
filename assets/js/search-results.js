/**
 * Created by Phugh on 26/01/2020.
 */

import {
    apiKey,
    baseUrl,
    imageBaseUrl,
    searchResultsImageSize
} from "./config.js";
import {
    getApi,
    getRating
} from "./shared-functions.js";

const searchTerm = window.location.href.split("?query=").pop();
if (searchTerm !== "") {
    const movieUrl = baseUrl.concat("search/movie?api_key=", apiKey, "&query=", searchTerm);
    const movieData = getApi(movieUrl);

    writeMovieList(movieData);
};

function writeMovieList(data) {
    data.then(data => {
        const results = data.results;
        const el = $("#movieList");

        if (data.total_results > 0) {
            const list = results.map(result => {
                const rating = getRating(result.vote_average, result.vote_count);
                const year = result.release_date.slice(0, 4);
                const poster = result.poster_path != null ? imageBaseUrl.concat(searchResultsImageSize, result.poster_path) : "assets/images/default-movie.png";
                return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 search-item-wrapper">
                                <div class="search-item">
                                    <a href="${"movie-details.html".concat("?query=",result.id)}">
                                    <img src="${poster}">
                                    </a>
                                <div class="search-item-details">
                                    <a href="${"movie-details.html".concat("?",result.id)}">
                                       ${result.title}
                                    </a>
                                    <span>(${year})</span>
                                </div>
                                <div class="rating">${rating}</div>
                                </div>
                            </div>`;
            })
            el.html(list);
        } else {
            $("#list-container").html(`<h3 id="no-results">No movies found. Refine your search term.</h3>`)
        };

    })
};