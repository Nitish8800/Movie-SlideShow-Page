document.querySelector("#form").addEventListener("submit", addMovie);
var movie = JSON.parse(localStorage.getItem("Movies_Data")) || [];
function addMovie(event) {
    event.preventDefault();
    var type = document.querySelector("#select").value;
    var name = document.querySelector("#name").value;
    var date = document.querySelector("#date").value;
    var image = document.querySelector("#img").value;
    var rating = document.querySelector("#rating").value;
    var MoviesData = {
        Type_Of_Movie: type,
        Movie_Name: name,
        Date: date.split("-").reverse().join("-"),
        Image_Of_Movie: image,
        Rate_Of_Movie: rating,
    };
    movie.push(MoviesData);
    localStorage.setItem("Movies_Data", JSON.stringify(movie));
}

document.querySelector("button").addEventListener("click", function () {
    window.location.href = "index.html";
});