/**
 * Created by Phugh on 26/01/2020.
 */

import {apiKey, baseUrl, imageBaseUrl, carouselImageSize, nowPlayingParams, comingSoonParams} from './config.js';
import {getApi} from './sharedFunctions.js';
const nowPlayingUrl = "".concat(baseUrl, "movie/now_playing?api_key=",apiKey );
const comingSoonUrl = "".concat(baseUrl, "movie/upcoming?api_key=", apiKey,"&language=en-US&page=1&region=GB");

initCarousels();

async function initCarousels(){
    const nowPlayingBody =  await getApi(nowPlayingUrl);
    const comingSoonBody =  await getApi(comingSoonUrl);
  /*  writeNowPlaying(nowPlayingBody);
    writeComingSoon(comingSoonBody);*/
    writeCarousel(nowPlayingBody,nowPlayingParams);
    writeCarousel(comingSoonBody,comingSoonParams)

}


function writeCarousel(data, params){
    const results = data.results;
    const el = params.el;
    const items = results.map(result => {
            return `<div class=${params.className}>
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
            nextArrow: params.nextArrow,
            prevArrow: params.prevArrow,
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