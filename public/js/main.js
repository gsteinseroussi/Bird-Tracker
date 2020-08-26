/* eslint-disable prettier/prettier */
/* eslint-disable indent */

$("#saveBird").submit((event) => {
    event.preventDefault();

    //retrieving info from input form
    const species = $("#species").val();
    const location = $("#location").val();
    const activity = $("#activity").val();
    const timeSpotted = $("#timeSpotted").val();

    //flickr api call here
    const URL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=84ecc9e2a26d8791a7b9b8b13c2be46f&text=%22" +
        species + "%22&sort=interestingness-desc&group_id=14477233%40N00&extras=url_q&per_page=1&page=1&format=json&nojsoncallback=1";

}).then((data) => {
    //create the bird object using the model
});