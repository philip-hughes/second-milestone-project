/**
 * Created by Phugh on 29/01/2020.
 */

import {apiKey, baseUrl} from './config.js';

const guestSessionUrl = baseUrl.concat("/authentication/guest_session/new?api_key=", apiKey);
const movieId = window.location.href.split('?').pop();
console.log(movieId);

$(document).ready(function() {
     $("i").click(function(){
         $("i").removeClass("selected")
         $(this).addClass("selected");
        });
    $("button").click(function(){
        const rating = $(".selected").attr("value");
        console.log(rating);
        postRating(rating, sessionId());
    });
});

async function postRating(value, sessionId){
    console.log(value);
    const id = await sessionId;
    const postRatingUrl = baseUrl.concat("movie/", movieId, "/rating?api_key=", apiKey, "&guest_session_id=", id );
    const ratingResponse = await fetch(postRatingUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"value" : value})
        })
    console.log(ratingResponse)
}

async function sessionId(){
    var sessionId = localStorage.getItem("guest_session_id");
    if(sessionId === null){
        await getSessionIdData().then(data => {
            sessionId = data.guest_session_id;
            console.log(sessionId)
            localStorage.setItem("guest_session_id",sessionId );
        });
    }
    return sessionId;
}

async function getSessionIdData(){
    const sessionIdData = await fetch(guestSessionUrl);
    return sessionIdData.json();
}