$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let review = $("#review").val();
        $("#results").append(`<div class="movie"><h3>${title}</h3><h4>${rating}</h4><p>${review}</p><button class="delete">Delete</button></div>`);
        $(this).trigger("reset");
    });
    $("#results").on("click", ".delete", function() {
        $(this).parent().remove();
    });
});