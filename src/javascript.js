const popup = document.querySelector("#popup");
window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("Siden vises");
  document.querySelector("#popup").classList.add("show");
  document.querySelector("#billetyper").classList.add("fade");
  document.querySelector("#popup").addEventListener("click", lukPopup);
}

function lukPopup() {
  console.log("Popupluk");
  popup.classList.remove("show");
  document.querySelector("#billetyper").classList.remove("fade");
  // document.querySelector("#popup").;
  // stener("click", startSpil);
}
