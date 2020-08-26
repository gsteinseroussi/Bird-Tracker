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

}).then((data) => {
    //create the bird object using the model
});