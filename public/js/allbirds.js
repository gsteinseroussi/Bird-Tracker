/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$(document).ready(() => {
    $.get("/api/birds", renderBirdList);
});

function renderBirdList(data) {
    data.forEach(bird => {
        const newLi = $("<li>").val(bird.name);
        const img = $("<img />", {
            src: bird.imageUrl,
            alt: `${bird.name} image`
        });
        newLi.append(
            `Spotted in: ${bird.location}
            Activity: ${bird.activity} in the ${bird.time}.

            ${img}
         `
        );
        $("#birdList").append(newLi);
    });
}
