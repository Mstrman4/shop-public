let $ = document;

import { metimenu } from "../component/menu/menu.js";
import { detailmenu } from "../component/detialsmenu/detailmenu.js";
import { mainhaader } from "../component/haader/header.js";
import { fetchcatg } from "../component/fetchcatg/fetchcatg.js";

window.customElements.define(`meti-menu`, metimenu);
window.customElements.define(`details-menu`, detailmenu);
window.customElements.define(`main-haader`, mainhaader);
window.customElements.define(`fetch-catg`, fetchcatg);

let cardDes = document.createElement('meti-menu');
let cardDesdetailmenu = document.createElement('details-menu');
let Mainhaader = document.createElement('main-haader');
let fetchcatgs = document.createElement('fetch-catg');

window.addEventListener("DOMContentLoaded", async () => {
    let bb = await fetch("https://fakestoreapi.com/products/categories");

    if (bb.status === 200) {
        let ff = await bb.json();
        cardDes.setAttribute("options", JSON.stringify(ff));
        $.getElementById("navs").appendChild(cardDes);
        $.getElementById("navs").appendChild(cardDesdetailmenu);
    }
});

window.addEventListener("DOMContentLoaded", async () => {
    let bb = await fetch("https://fakestoreapi.com/products/3");

    if (bb.status === 200) {
        let ff = await bb.json();
        $.querySelector("header").appendChild(Mainhaader);
        Mainhaader.insertAdjacentHTML("afterbegin", `<img src="${ff.image}" slot="miniimg"></img>`);
        Mainhaader.insertAdjacentHTML("afterbegin", `<p slot="minititle" class="font-extrabold text-xs">${ff.title}</p>`);
        Mainhaader.insertAdjacentHTML("afterbegin", `<p slot="minicat" class="font-normal text-slate-500 text-xs">${ff.category}</p>`);
        Mainhaader.insertAdjacentHTML("afterbegin", `<span slot="rate">like : ${ff.rating.rate}</span>`);
    }
});

// دریافت اطلاعات دسته‌بندی‌ها از API
let getcat = async () => {
    let data = await fetch("https://fakestoreapi.com/products/categories");
    let bbs = await data.json();
    return bbs;
}

let getprod = async (int) => {
    let data = await fetch(`https://fakestoreapi.com/products/${int}`);
    let bbs = await data.json();
    return bbs;
}

let categories = await getcat();
let singelprod = await getprod(4);

categories.forEach(e => {

    let categoryElement = document.createElement("fetch-catg");
    categoryElement.insertAdjacentHTML("afterbegin", `   <p slot="catg" class="font-semibold text-center text-black">${e}</p>`)
    $.querySelector(".feach-catg").appendChild(categoryElement);


});


let mm = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


let show = 4
let length = 0
let prod = 0

function train (start , end){

console.log();




}