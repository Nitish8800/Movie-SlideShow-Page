  /* Slider Start  */

  var data = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3204/1063204-h-886d45c351ac",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2007/1092007-h-04c13bf7828e",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8722/1078722-h-82919d0d3c64",
  ];

  let main = document.getElementById("imageSliding");
  let i;
  let div = document.createElement("div");
  div.className = "divImages";

  let images = document.createElement("img");
  images.className = "imagers";

  images.setAttribute("src", data[0]);
  i = 1;
  function slideShow() {
    if (i == data.length) i = 0;
    main.append(images);
    images.setAttribute("src", data[i]);
    i++;

    div.append(images);
    main.append(div);
  }
  setInterval(slideShow, 1000);

  /* Slider End  */

  /* Movies sort by Rating Start  */

  var movies = JSON.parse(localStorage.getItem("Movies_Data"));
  displayItem(movies);

  function ratingSort() {
    var selected = document.querySelector("#rateSort").value;
    // console.log(selected);
    if (selected == "high") {
      movies.sort(function (a, b) {
        return Number(b.Rate_Of_Movie) - Number(a.Rate_Of_Movie);
      });
    }
    if (selected == "low") {
      movies.sort(function (a, b) {
        return Number(a.Rate_Of_Movie) - Number(b.Rate_Of_Movie);
      });
    }
    //console.log(products);
    displayItem(movies);
  }

  /* Movies sort by Rating End  */

  /* Movies Grid Start  */

  function displayItem(movies) {
    document.querySelector("#movieGrid").textContent = "";
    movies.map(function (elem) {
      // console.log(index);
      var moviesDiv = document.createElement("div");
      moviesDiv.className = "child";

      var imag = document.createElement("img");
      imag.setAttribute("src", elem.Image_Of_Movie);
      imag.className = "imag";

      var h2 = document.createElement("h2");
      h2.innerHTML =
        elem.Movie_Name + "<br>" + elem.Type_Of_Movie + "<b> : Movie</b>";

      var Dates = document.createElement("p");
      Dates.textContent = elem.Date.split("-").reverse().join("-");
      Dates.className = "p";

      var rate = document.createElement("p");
      rate.textContent = "  ⭐  " + elem.Rate_Of_Movie;
      rate.className = "rate";

      moviesDiv.append(imag, h2, Dates, rate);
      document.querySelector("#movieGrid").append(moviesDiv);
    });
  }

  /* Movies Grid End  */