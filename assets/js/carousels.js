/**
 * Created by Phugh on 26/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, carouselImageSize} from './config.js';

const nowPlayingUrl = "".concat(baseUrl, "movie/now_playing?api_key=",apiKey );
const comingSoonUrl = "".concat(baseUrl, "movie/upcoming?api_key=", apiKey,"&language=en-US&page=1&region=GB");

initCarousels();

async function initCarousels(){
    const nowPlayingResponse =  await getNowPlaying(nowPlayingUrl);
    const comingSoonResponse =  await getComingSoon(comingSoonUrl);
    const nowPlayingBody = await nowPlayingResponse.json();
    const comingSoonBody = await comingSoonResponse.json();
    writeNowPlaying(nowPlayingBody);
    writeComingSoon(comingSoonBody);
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
        const results = data.results;
        const el = $('#now-playing-carousel');
        const items = results.map(result => {
                return `<div class="now-playing-item">
                            <a class="carousel-item-link" href="${"movie-details.html".concat("?",result.id)}">
                                <img src="${imageBaseUrl.concat(carouselImageSize,result.poster_path)}">
                             </a>                            
                        </div>
                    `;
            }
        );
        el.append(items);
    $(document).ready(function(){
        el.slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: $('.np-next'),
            prevArrow: $('.np-prev'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
}

function writeComingSoon(data){
        const results = data.results;
        const el = $('#coming-soon-carousel');
        const items = results.map(result => {
                return `<div class="coming-soon-item">
                            <a class="carousel-item-link" href="${"movie-details.html".concat("?",result.id)}">
                                <img src="${imageBaseUrl.concat(carouselImageSize,result.poster_path)}">
                             </a>                            
                        </div>
                    `;
            }
        );
        el.append(items);
    $(document).ready(function(){
        el.slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: $('.cs-next'),
            prevArrow: $('.cs-prev'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
};