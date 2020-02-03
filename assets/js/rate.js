/**
 * Created by Phugh on 29/01/2020.
 */
/*const baseUrl = "https://api.themoviedb.org/3/";
* const apiKey = "057284199444718faf6314cb69a872ab";*/
const imageBaseUrl = "https://image.tmdb.org/t/p/w185";

const guestSessionUrl = "https://api.themoviedb.org/3/".concat("/authentication/guest_session/new?api_key=", "057284199444718faf6314cb69a872ab");


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
    const postRatingUrl = "https://api.themoviedb.org/3/movie/581/rating?api_key=057284199444718faf6314cb69a872ab&guest_session_id=".concat(id);

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