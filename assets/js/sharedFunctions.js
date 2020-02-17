/**
 * Created by Phugh on 17/02/2020.
 */
export async function getApi(url){
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
};

export function getDateString(releaseDate){
    var monthName = moment(releaseDate).format('MMM');
    var year = moment(releaseDate).format('YYYY');
    var day = moment(releaseDate).format('DD');

    return monthName.concat(" ").concat(day).concat(", ").concat(year);


}