/**
 * Created by Phugh on 17/02/2020.
 */
export async function getApi(url){
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
};