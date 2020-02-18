/**
 * Created by Phugh on 26/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, searchResultsImageSize} from './config.js';
import {getApi} from './sharedFunctions.js';

const searchTerm = window.location.href.split('?').pop();
    if (searchTerm !== ""){
        const movieUrl = "".concat(baseUrl, "search/movie?api_key=", apiKey, '&query=', searchTerm);
        const movieData = getApi(movieUrl);

        writeMovieList(movieData);
};

function writeMovieList(data){
    data.then(data => {
        const results = data.results;
        const el = $('#movieList');

        if(data.total_results > 0){
            const list = results.map(result => {
                    const score = result.vote_average;
                    var starClasses = [];
                    if(score < 1){
                        starClasses = ['far', 'far', 'far', 'far', 'far'];
                    } else if(score < 3){
                        starClasses = ['fas', 'far', 'far', 'far', 'far'];
                    } else if(score < 5){
                        starClasses = ['fas', 'fas', 'far', 'far', 'far'];
                    } else if(score < 7){
                        starClasses = ['fas', 'fas', 'fas', 'far', 'far'];
                    } else if(score < 9){
                        starClasses = ['fas', 'fas', 'fas', 'fas', 'far'];
                    } else {
                        starClasses = ['fas', 'fas', 'fas', 'fas', 'fas'];
                    }
                    const stars = starClasses.map(item => {
                        return `<i class="${item} fa-star"></i>`
                    });
                    const rating = result.vote_count > 0 ? stars.join("") : `<span>Not rated yet</span>`;

                    const year = result.release_date.slice(0,4);
                    const poster = result.poster_path != null ? imageBaseUrl.concat(searchResultsImageSize,result.poster_path) : "assets/imgs/default-movie.png";
                    return `<div class="col-sm-6 col-md-4 col-lg-3 search-item-wrapper">
                                <div class="search-item">
                                    <a href="${"movie-details.html".concat("?",result.id)}">
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
                }
            )
            el.html(list);
        }else{
            $('#list-container').html(`<h3 id="no-results">No movies found. Refine your search term.</h3>`)};

    })
};