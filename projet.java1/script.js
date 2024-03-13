// let clikMe = document.querySelector("#carte");
// let select = document.querySelector("select");

// select.addEventListener("click", () => {
//   clikMe.style.visibility = "visible";
//   clikMe.style.background = "red";
// });
let parent = document.querySelector("parent");
let fils = document.querySelectorAll("#fils");

console.log(fils);
for (i = 0; i < fils.length; i++) {
  let plus = fils[i].children[2].children[1].children[0];
  let moin = fils[i].children[2].children[1].children[2];
  //   console.log(moin);
  let valeur = fils[i].children[2].children[1].children[1];
  let prix = fils[i].children[2].children[2].children[0].children[0].innerHTML;
  //   console.log(prix);
  let total = fils[i].children[2].children[2].children[1].children[0];
  //   console.log(total);

  //   console.log(valeur);
  plus.addEventListener("click", () => {
    // valeur++ && valeur * prix;
    let btnplus = valeur.innerHTML;
    btnplus++;
    valeur.innerHTML = btnplus;
    total.innerHTML = prix * btnplus;
  });
  moin.addEventListener("click", () => {
    let btnmoin = valeur.innerHTML;
    if (btnmoin > 0) {
      btnmoin--;
      valeur.innerHTML = btnmoin;
      total.innerHTML = prix * btnmoin;
    }
    // alert(total.innerHTML);
  });
  let btnlike = fils[i].children[0];
  btnlike.addEventListener("click", () => {
    if (btnlike.style.color === "black") {
      btnlike.style.color = "red";
    } else {
      btnlike.style.color = "black";
    }
  });
}
