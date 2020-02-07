/**
 * Created by Phugh on 26/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, carouselImageSize} from './config.js';

const nowPlayingUrl = "".concat(baseUrl, "movie/now_playing?api_key=",apiKey );
const comingSoonUrl = "".concat(baseUrl, "movie/upcoming?api_key=", apiKey,"&language=en-US&page=1&region=GB");

initCarousels();

async function initCarousels(){
    const nowPlayingData =  await getNowPlaying(nowPlayingUrl);
    const comingSoonData =  await getComingSoon(comingSoonUrl);
    writeNowPlaying(nowPlayingData.json());
    writeComingSoon(comingSoonData.json());
}

async function getNowPlaying(url){
    const data = await fetch(url);
    return data;
};

async function getComingSoon(url){
    const data = await fetch(url);
    return data;
};

function writeNowPlaying(data){
    data.then(data => {
        const results = data.results;
        const el = $('#now-playing-carousel');
        const items = results.map(result => {
            return `<a class="carousel-item-link" href="${"movie-details.html".concat("?",result.id)}">
                        <div class="now-playing-item">
                            <img src="${imageBaseUrl.concat(carouselImageSize,result.poster_path)}">
                        </div>
                    </a>`;
            }
        );
        el.append(items);
        el.slick({
            infinite: false,
            slidesToShow: 5,
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
                return `<a class="carousel-item-link" href="${"movie-details.html".concat("?",result.id)}">
                            <div class="coming-soon-item">
                                <img src="${imageBaseUrl.concat(carouselImageSize, result.poster_path)}">
                            </div>
                        </a>`;
            }
        );
        el.append(items);
        el.slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: $('.cs-next'),
            prevArrow: $('.cs-prev')
        });
    });
};

