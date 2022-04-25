function animateText() {
  const k = document.querySelector("#keyframes");

document.querySelectorAll(".info__row").forEach((e => {
  const t = document.body.clientWidth,
    n = e.children[0].clientWidth;
  let c = n,
    o = 1;
  for (; t > c;) {
    const t = e.children[0].cloneNode();
    t.innerHTML = e.children[0].innerHTML, e.append(t), c += n, o++
  }
  let r = "@keyframes animText {0% {transform: translate(0)} 100% {transform: translateX(-" + 100 / o + "%);}}";
  k.innerHTML = r
}))

}
animateText();
document.addEventListener('DOMContentLoaded', animateText);
document.addEventListener('load', animateText); 