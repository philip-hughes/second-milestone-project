/**
 * Created by Phugh on 25/01/2020.
 */

/* The search function
 1. Captures the search term and appends it to the url so it can be used on the search-results page.
 2. Redirects to the search-results page.
 3. Clears the search box.
 */
function search() {
    const searchTerm = $("#searchbox").val();
    if (searchTerm !== "") {
        const searchUrl = "search-results.html".concat("?query=", searchTerm);
        $(location).attr('href', searchUrl);
        $("#searchbox").val("");
    }
};

$(document).ready(function () {
    $("#searchbox").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#search-button").click();
        }
    });
});