const collapsibles = document.querySelectorAll(".collapsible");
console.log(collapsibles);

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
