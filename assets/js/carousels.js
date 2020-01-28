/**
 * Created by Phugh on 26/01/2020.
 */

const baseUrl = "https://api.themoviedb.org/3/";
const imageBaseUrl = "https://image.tmdb.org/t/p/w185";
const apiKey = "057284199444718faf6314cb69a872ab";

const nowPlayingUrl = "".concat(baseUrl, "movie/now_playing?api_key=",apiKey);
const nowPlayingData = getNowPlaying(nowPlayingUrl);

const comingSoonUrl = "".concat(baseUrl, "movie/upcoming?api_key=", apiKey,"&language=en-US&page=1&region=GB");
const comingSoonData = getComingSoon(comingSoonUrl);

writeNowPlaying(nowPlayingData);
writeComingSoon(comingSoonData);

async function getNowPlaying(url){
    const data = await fetch(url);
    return data.json();
};

async function getComingSoon(url){
    const data = await fetch(url);
    return data.json();
};

function writeNowPlaying(data){
    data.then(data => {
        const results = data.results;
        const el = $('#now-playing-carousel');
        const items = results.map(result => {
            return `<a href="${"movie-details.html".concat("?",result.id)}"><div class="now-playing-item"><img src="${imageBaseUrl.concat(result.poster_path)}"></div></a>`;
            }
        );
        el.append(items);
        console.log(items)
        el.slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 3,
            nextArrow: $('.np-next'),
            prevArrow: $('.np-prev')
        });
    });
}

function writeComingSoon(data){
    data.then(data => {
        const results = data.results;
        const el = $('#coming-soon-carousel');
        const items = results.map(result => {
                return `<a href="${"movie-details.html".concat("?",result.id)}"><div class="coming-soon-item"><img src="${imageBaseUrl.concat(result.poster_path)}"></div></a>`;
            }
        );
        el.append(items);
        el.slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 3,
            nextArrow: $('.cs-next'),
            prevArrow: $('.cs-prev')
        });
    });
};

