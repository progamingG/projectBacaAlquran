import { alq } from "./api.js";
const eldiv = document.getElementsByClassName("elDiv");
const elbutton = document.getElementsByTagName("button");
const elinput = document.querySelector("input");

// const elp = eldiv[0].firstElementChild

elinput.addEventListener("keyup", function (e) {
  let text = parseInt(e.target.value);
  if (!text && e.target.value !== "") {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "green";
  }
});

async function main(ayat) {
  let surahalfatiha = await alq("https://api.npoint.io/99c279bb173a6e28359c/surat/" + ayat);
  surahalfatiha.forEach((value, ind) => {
    eldiv[0].innerHTML += `<p>${value.ar}</p>`;
  });
  //   console.log(ayat);
}

elbutton[0].addEventListener("click", function () {
  let text = parseInt(elinput.value);
  if (!text) {
    confirm("cari surah berdasarkan urutanya bukan namanya");
    return;
  }
  eldiv[0].innerHTML = ""

  main(text);
});
