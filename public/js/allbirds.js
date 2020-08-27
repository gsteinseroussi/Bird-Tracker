/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$(document).ready(() => {
    $.get("/api/birds", renderBirdList);
});

function renderBirdList(data) {
    data.forEach(bird => {
        console.log(bird);
        const newLi = $("<li>");
        const img = $("<img />", {
            src: bird.imageUrl,
            alt: `${bird.name} image`
        });
        newLi.append(
            `
            ${bird.name}
            Spotted in: ${bird.location}
            Activity: ${bird.activity}
            Time spotted: ${bird.time}

         `
        );
        $("#birdList").append(newLi);
        $(newLi).append(img);
    });
}
