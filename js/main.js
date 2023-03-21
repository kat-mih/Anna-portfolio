const collapsibles = document.querySelectorAll(".navbar");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("navbar--expanded");
  })
);