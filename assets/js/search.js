/**
 * Created by Phugh on 26/01/2020.
 */
const baseUrl = "https://api.themoviedb.org/3/";
const imageBaseUrl = "https://image.tmdb.org/t/p/w92";
const apiKey = "057284199444718faf6314cb69a872ab";

const searchTerm = window.location.href.split('?').pop();
    if (searchTerm !== ""){
        console.log("inside search")

        const movieUrl = "".concat(baseUrl, "search/movie?api_key=", apiKey, '&query=', searchTerm);
        const tvUrl = "".concat(baseUrl, "search/tv?api_key=", apiKey, '&query=', searchTerm);

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
                    return `<li class="search-item">
                                <a href="${"movie-details.html".concat("?",result.id)}">
                                    <img src="${imageBaseUrl.concat(result.poster_path)}">
                                </a>
                                <div class="search-item-details">
                                    <a href="${"movie-details.html".concat("?",result.id)}">
                                        ${result.title}
                                    </a>
                                    <span>(${year})</span>
                                </div>
                                <div class="rating">${rating}</div> 
                            </li>`;
                }
        )
        el.html(list);
    })


}