window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sitcky", window.scrollY > 0);
});