/**
 * Created by Phugh on 17/02/2020.
 */
export async function getApi(url) {
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
};

export function getDateString(releaseDate) {
    var monthName = moment(releaseDate).format('MMM');
    var year = moment(releaseDate).format('YYYY');
    var day = moment(releaseDate).format('DD');

    return monthName.concat(" ").concat(day).concat(", ").concat(year);
}

export function getRating(voteAverage, voteCount) {
    const score = Math.round((voteAverage) / 2);
    var starClasses = ['far', 'far', 'far', 'far', 'far'];
    if (score >= 1) {
        starClasses = starClasses.fill('fas', 0, score);
    }
    const stars = starClasses.map(item => {
        return `<i class="${item} fa-star"></i>`
    });
    const rating = voteCount > 0 ? stars.join("") : "Not rated yet";
    return rating;

}