let $ = document;

import { metimenu } from "../component/menu/menu.js";
import { detailmenu } from "../component/detialsmenu/detailmenu.js";
import { mainhaader } from "../component/haader/header.js";
import { fetchcatg } from "../component/fetchcatg/fetchcatg.js";
import { mainContent } from "../component/main-content/main-comp.js";

window.customElements.define(`meti-menu`, metimenu);
window.customElements.define(`details-menu`, detailmenu);
window.customElements.define(`main-haader`, mainhaader);
window.customElements.define(`fetch-catg`, fetchcatg);
window.customElements.define(`m-c`, mainContent);

let cardDes = document.createElement('meti-menu');
let cardDesdetailmenu = document.createElement('details-menu');
let Mainhaader = document.createElement('main-haader');
let fetchcatgs = document.createElement('fetch-catg');

// window.addEventListener("DOMContentLoaded", async () => {
//     let bb = await fetch('https://dummyjson.com/products/categories');

//     if (bb.status === 200) {
        
//         let ff = await bb.json();
    
//         cardDes.setAttribute("options", JSON.stringify(ff));
//         $.getElementById("navs").appendChild(cardDes);
//         $.getElementById("navs").appendChild(cardDesdetailmenu);
//     }
// });

// window.addEventListener("DOMContentLoaded", async () => {
//     let bb = await fetch("https://dummyjson.com/products/83");

//     if (bb.status === 200) {
//         let ff = await bb.json();
//         $.querySelector("header").appendChild(Mainhaader);
//         Mainhaader.insertAdjacentHTML("afterbegin", `<img src="${ff.images[0]}" slot="miniimg"></img>`);
//         Mainhaader.insertAdjacentHTML("afterbegin", `<p slot="minititle" class="font-extrabold text-xs">${ff.title}</p>`);
//         Mainhaader.insertAdjacentHTML("afterbegin", `<p slot="minicat" class="font-normal text-slate-500 text-xs">${ff.category}</p>`);
//         Mainhaader.insertAdjacentHTML("afterbegin", `<span slot="rate">like : ${ff.reviews[0].rating}</span>`);
//     }
// });

// دریافت اطلاعات دسته‌بندی‌ها از API
let getcat = async () => {
    let data = await fetch("https://dummyjson.com/products/categories");
    let bbs = await data.json();
    return bbs;
}

let getprod = async (int) => {
    let data = await fetch(`https://dummyjson.com/products/${int}`);
    let bbs = await data.json();
    return bbs;
}
let getallprod = async () => {
    let data = await fetch(`https://dummyjson.com/products`);
    
    let bbs = await data.json();
   
    
    return bbs.products;
}

let categories = await getcat();
let singelprod = await getprod(108);
let allprod = await getallprod();

// // console.log(allprod[0]);


// categories.forEach(e => {

//     let aatg = document.createElement("a");
//     aatg.setAttribute("href",`/category.html?catg=${e.name}`)
//     aatg.className="category-box bg-white border border-gray-300 p-4 text-green-900 rounded-lg shadow-md  text-center"
 
    

    
//     let categoryElement = document.createElement("fetch-catg");
//     // categoryElement.insertAdjacentHTML("afterbegin", `<a slot="atg" href="/category.html?catg=${e.name}"></a>`)
//     categoryElement.insertAdjacentHTML("afterbegin", `   <p slot="catg" class="font-semibold text-center text-black">${e.name}</p>`)
//     aatg.appendChild(categoryElement);
//     $.querySelector(".feach-catg").appendChild(aatg);


// });




// let indexFEali = 0
// train(allprod)

// function train (prods) {
    
//     for (let index = 0; index < 8; index++) {
        
//        if (prods[indexFEali]==undefined) {
//         $.querySelector("#loadMore").style.display="none"
//        }
       
//         let amc = document.createElement("a")
//         amc.setAttribute("href",`prod.html?id=${prods[indexFEali].id}`)
//         amc.className="w-6/12 md:w-3/12 lg:w-3/12 xl:w-2/12 p-4 "

//         let mc = document.createElement("m-c");
        
        
//         mc.insertAdjacentHTML("beforeend", ``);
        
//         mc.insertAdjacentHTML("beforeend", `<img slot="mc-img" class="w-full max-h-[129px] md:max-h-[152px] lg:md:max-h-[218px]"  src="${prods[indexFEali].images[0]}" alt="">`);
//         mc.insertAdjacentHTML("beforeend", `<p slot="mc-name" class="font-bold">${prods[indexFEali].title}</p>`);
//         mc.insertAdjacentHTML("beforeend", `<span slot="mc-price" class="font-bold">${prods[indexFEali].price}$</span>`);
//         mc.insertAdjacentHTML("beforeend", `<span slot="mc-rate" class="font-normal">${prods[indexFEali].rating}</span>`);
//         mc.insertAdjacentHTML("beforeend", `<span slot="mc-stock" class="font-normal">${prods[indexFEali].stock} sold</span>`);
   
        
//         amc.appendChild(mc);
//         document.querySelector(".main-content").appendChild(amc);
    
        
//         indexFEali++;        
//     }
// }

// $.querySelector("#loadMore").addEventListener("click", ()=>{
//     train(allprod)
// })


// function banner (){

//     let bnas = document.createElement("div")

//     bnas.className="flex  flex-col gap-6 mt-10 p-3 justify-center md:w-6/12"


//     bnas.insertAdjacentHTML("beforeend",`
         
//             <h1 class="text-left text-3xl font-extrabold">${singelprod.title}</h1>
//             <p class="text-slate-500 ">${singelprod.description}</p>
//             <div class="flex ">          <button type="button" class="md:w-5/12 mx-1    text-white w-full bg-[#1E4C2F]  font-medium rounded-lg text-2xl font-extrabold px-5 py-2.5 mb-2 ">buy ${singelprod.price}</button>
//             <button type="button" class=" md:w-5/12 mx-1   w-full text-[#1E4C2F]  hover:text-white border border-[#1E4C2F] hover:bg-[#5d8b6e]  font-medium rounded-lg text-2xl px-5 py-2.5 text-center mb-2">view detail</button>
//            </div>
//        `)
    
//         $.querySelector("#promoBanner").appendChild(bnas)
// }
// banner()













async function test (){

    let data1 = await fetch("https://laser.ir/modules/servers/product/views/viewpanel.php?id=10773&u=client")

    console.log(data1);

    let data2 = data1.json()

    console.log(data2);
    
    
}

test()









