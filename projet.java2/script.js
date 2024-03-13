// let corps = document.querySelector(".container");
// console.log(corps);
// let appuie = document.querySelector(".toggle");
// console.log(appuie);
// let color = ["violet", "red", "green", "pink", "black", "yellow"];

// appuie.addEventListener("click", () => {
//   let colorI = parseInt(Math.random() * color.length);
//   corps = color[colorI];
// });
let corps = document.querySelector(".container");
console.log(corps);
let appuie = document.querySelector(".toggle");
console.log(appuie);
let colors = ["violet", "red", "green", "pink", "black", "yellow"];

appuie.addEventListener("click", () => {
  let colorI = parseInt(Math.random() * colors.length);
  let chosenColor = colors[colorI];
  corps.style.backgroundColor = chosenColor;
});
