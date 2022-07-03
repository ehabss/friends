let video = document.getElementById("player");
let episode = document.getElementById("episode");

var div = document.getElementById("seasons");
let toglle = document.getElementById("openseasons");
function openseasons() {
  div.className = "open-menu";
}
function remove() {
  var div = document.getElementById("seasons");
  div.className = "remove";
}
// --------------------loader-----------------------
let span = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// --------------------loader-----------------------
const countEl = document.getElementById("counter");
updateVisitCount();
function updateVisitCount() {
  fetch(
    "https://api.countapi.xyz/update/default/7eb1dfa4-0561-46e7-a66b-69a252e8a825/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}
// butt.addEventListener("click", method1);
// butt.addEventListener("click", method2);
// function method2() {
//   fetch(
//     `https://api.telegram.org/bot5147974264:AAE0_410j8-zFS53sP7FSB23RcsM9lru8Eo/sendMessage?chat_id=@mememeeeeme&text=${
//       document.getElementById("telegram").value
//     }`
//   );
// }
// function method1() {
//   contact.className = "remove";
// }
// exit.onclick = function () {
//   contact.className = "remove";
// };