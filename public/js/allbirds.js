/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$(document).ready(() => {
    $.get("/api/birds", renderBirdList);
});

function renderBirdList(data) {
    data.forEach(bird => {
        console.log(bird);

        $("#birdList").append(
            `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${bird.imageUrl}" alt="bird image">
            <div class="card-body">
              <h5 class="card-title">${bird.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Spotted: ${bird.location}</li>
              <li class="list-group-item">Activity: ${bird.activity}</li>
              <li class="list-group-item">Time: ${bird.time}</li>
            </ul>
          </div>
         `
        );

    });
}

