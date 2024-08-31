let $ = document ;

import { metimenu } from "../component/menu/menu.js";
import { detailmenu } from "../component/detialsmenu/detailmenu.js";
import { mainhaader } from "../component/haader/header.js";

window.customElements.define(`meti-menu`, metimenu)
window.customElements.define(`details-menu`, detailmenu)
window.customElements.define(`main-haader`, mainhaader)

 let cardDes = document.createElement('meti-menu')
 let cardDesdetailmenu = document.createElement('details-menu')
 let Mainhaader = document.createElement('main-haader')


window.addEventListener("DOMContentLoaded", async ()=>{
    
    let bb = await fetch("https://fakestoreapi.com/products/categories")

    if(bb.status===200){
        
        let ff = await bb.json()

        // let nbv = JSON.parse(ff)

        // console.log(ff[1]);
        


        cardDes.setAttribute("options" , JSON.stringify(ff))

         $.getElementById("navs").appendChild(cardDes)
         
         $.getElementById("navs").appendChild(cardDesdetailmenu)

        //  cardDes.insertAdjacentHTML("afterbegin",`<p slot="test">${ff[1]}</p>`)

        // console.log($.querySelector("meti-menu"));
        
         

    }

    
    
})
window.addEventListener("DOMContentLoaded", async ()=>{
    
    let bb = await fetch("https://fakestoreapi.com/products/3")

    if(bb.status===200){
        
        let ff = await bb.json()


        console.log(ff);

        $.querySelector("header").appendChild(Mainhaader)



    
          
        Mainhaader.insertAdjacentHTML("afterbegin",` <img src="${ff.image}" slot="miniimg"></img>`)
        Mainhaader.insertAdjacentHTML("afterbegin",` <p slot="minititle" class="font-extrabold text-xs">${ff.title}</p>`)
        Mainhaader.insertAdjacentHTML("afterbegin",` <p slot="minicat" class="font-normal text-slate-500 text-xs">${ff.category}</p>`)
        Mainhaader.insertAdjacentHTML("afterbegin",` < <span slot="rate" >like : ${ff.rating.rate}</span>`)
        //  cardDes.insertAdjacentHTML("afterbegin",`<p slot="test">${ff[1]}</p>`)

        // console.log($.querySelector("meti-menu"));
        
         

    }

    
    
})

























