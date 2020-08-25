/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$("#viewAll").on("click", () => {
    $(".popup, .popup-content").addClass("active");
    $.get("/api/birds", data => {
        $(data).each(() => {
            $("<div>")
                .addClass("card")
                .val(this.name);
        });
    });
});

$(".close, .popup").on("click", () => {
    $(".popup, .popup-content").removeClass("active");
});
