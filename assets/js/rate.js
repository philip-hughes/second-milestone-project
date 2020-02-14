/**
 * Created by Phugh on 29/01/2020.
 */
import {apiKey, baseUrl} from './config.js';

const guestSessionUrl = baseUrl.concat("/authentication/guest_session/new?api_key=", apiKey);
const movieId = window.location.href.split('?').pop();

async function submitRating(){
    const rating = $(".score").attr("value");
   /* const ratingResponse = await postRating(rating, sessionId());*/
    const id = await sessionId();
    const postRatingUrl = baseUrl.concat("movie/", movieId, "/rating?api_key=", apiKey, "&guest_session_id=", id );
    const ratingResponse = await fetch(postRatingUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"value" : rating})
    });
    writeRatingResponse(ratingResponse);
}

async function writeRatingResponse(response){
    const responseBody = await response.json();
    if(responseBody.status_code === 12){
       $("#rating-container").html("<p>You've already rated this movie</p>")
    }else if (responseBody.status_code === 1){
       $("#rating-container").html("<p>Your rating has been submitted</p>")
    }
};

async function sessionId(){
    var sessionId = localStorage.getItem("guest_session_id");
    if(sessionId === null){
        await getSessionIdData().then(data => {
            sessionId = data.guest_session_id;
            localStorage.setItem("guest_session_id",sessionId );
        });
    }
    return sessionId;
}

async function getSessionIdData(){
    const sessionIdData = await fetch(guestSessionUrl);
    return sessionIdData.json();
};

$("i").hover(
    function(){
        $(this).addClass("hover-yellow");
        $(this).prevAll().addClass("hover-yellow");
    },
    function(){
        $(this).removeClass("hover-yellow");
        $(this).prevAll().removeClass("hover-yellow");
    });

$("i").click(function(){
    if(($(this).hasClass("score"))){
        $(this).removeClass("score selected-yellow");
        $(this).prev().addClass("score");
    }else {
        $("i").removeClass("score selected-yellow");
        $(this).addClass("score selected-yellow");
        $(this).prevAll().addClass("selected-yellow");
    }
});

$("button").click(function(){
    submitRating();
});