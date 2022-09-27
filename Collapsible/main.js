const collapsibles = document.querySelectorAll(".heading");
console.log(collapsibles);

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
}
