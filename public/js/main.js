/* eslint-disable prettier/prettier */
/* eslint-disable indent */

$("#addBirdForm").submit((event) => {
    event.preventDefault();
    console.log("Submitting new bird");
    let imageUrl;


    //flickr api call here
    const URL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=84ecc9e2a26d8791a7b9b8b13c2be46f&text=%22" +
        species + "%22&sort=interestingness-desc&group_id=14477233%40N00&extras=url_q&per_page=1&page=1&format=json&nojsoncallback=1";

}).then((data) => {
    //create the bird object using the model
    console.log("Adding new bird");

    //retrieving info from input form
    const species = $("#species").val().trim();
    const location = $("#location").val().trim();
    const activity = $("#activity").val().trim();
    const timeSpotted = $("#timeSpotted").val();

    const newBird = {
        name: species,
        location: location,
        activity: activity,
        time: timeSpotted,
        imageUrl: data.imageUrl
    };

    $.ajax("/api/birds", {
        type: "POST",
        data: newBird
    }).then(() => {
        console.log("Successfully added bird");
    });
});
