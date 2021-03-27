window.addEventListener("load", function () {
  /*je vais chercher des truc dans le dom*/

  let figure = document.getElementsByClassName("grid__figure");

  let bas = document.querySelector(".home img:last-child");
  let top = document.querySelector(".grid > a img");
  let pos = 0;

  /*je prepare un intersection observer pour faire apparaitre la fleche pour aller en haut*/

  var callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting == true) {
        top.style.display = "none";
      } else {
        top.style.display = "initial";
      }
    });
  };

  let observer = new IntersectionObserver(callback);

  observer.observe(bas);

  /*j'anime la flèche de l'accueil*/

  function hautBas() {
    bas.style.transform = "translateY(" + pos + "px)";
    if (pos < 20) {
      requestAnimationFrame(hautBas);
    } else {
      requestAnimationFrame(basHaut);
    }
    pos += 0.2;
  }

  function basHaut() {
    bas.style.transform = "translateY(" + pos + "px)";
    if (pos > 0) {
      requestAnimationFrame(basHaut);
    } else {
      requestAnimationFrame(hautBas);
    }
    pos -= 0.2;
  }

  requestAnimationFrame(hautBas);

  /*je gère l'apparition du qr code au clic*/

  for (let i = 0; i < figure.length; i++) {
    let img = figure[i].getElementsByTagName("img");

    let name = figure[i].getElementsByTagName("span");

    let figcaption = figure[i].getElementsByTagName("figcaption");

    figure[i].addEventListener("click", function () {
      if (img[0].style.display != "none") {
        img[0].style.display = "none";
        name[0].style.visibility = "hidden";
        figcaption[0].style.display = "flex";
        figure[i].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      } else {
        img[0].style.display = "initial";
        name[0].style.visibility = "visible";
        figcaption[0].style.display = "none";
        figure[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      }
    });
  }
});
