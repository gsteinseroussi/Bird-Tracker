/* eslint-disable prettier/prettier */
/* eslint-disable indent */

$("#addBirdForm").submit((event) => {
    event.preventDefault();
    console.log("Submitting new bird");
    // const imageUrl = "https://placebear.com/150/150";


    //after the flickr api call runs, the following code will go in a .then addendum to that api call


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
    };


    $.ajax("/api/birds", {
        type: "POST",
        data: newBird
    }).then(() => {
        console.log("Successfully added bird");
    });


    //the .then statement will end here
});

