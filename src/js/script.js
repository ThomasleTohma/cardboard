window.addEventListener("load", function () {
  let figure = document.getElementsByClassName("grid__figure");

  for (let i = 0; i < figure.length; i++) {
    let img = figure[i].getElementsByTagName("img");

    let figcaption = figure[i].getElementsByTagName("figcaption");

    figure[i].addEventListener("click", function () {
      if (img[0].style.display != "none") {
        img[0].style.display = "none";
        figcaption[0].style.display = "flex";
      } else {
        img[0].style.display = "initial";
        figcaption[0].style.display = "none";
      }
    });
  }
});
