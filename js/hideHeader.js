var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("encabezado").style.top = "0";
  } else {
    document.getElementById("encabezado").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}
