window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("Siden vises");
  document.querySelector("#popup").classList.add("show");
  document.querySelector("#billetyper").classList.add("fade");
}

// function popUp() {
//     console.log("Popup");
//     hjaelp.classList.add("skjul");
//     popup.classList.remove("skjul");
//     popup.classList.add("show");
//     play.classList.remove("skjul");
//     play.classList.add("pulse");
//     play.addEventListener("click", startSpil);

// }
//       }
// document.querySelector("#start_background").classList.add("right");
// logo.classList.add("show");
// hjaelp.classList.add("pulse");
// hjaelp.addEventListener("click", popUp);
// lvlcomplskaerm.classList.add("skjul");
// gameoverskaerm.classList.add("skjul");
// popup.classList.add("skjul");
// play.classList.add("skjul");
