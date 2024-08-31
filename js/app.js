let $ = document ;

import { metimenu } from "../component/menu/menu.js";
import { detailmenu } from "../component/detialsmenu/detailmenu.js";

window.customElements.define(`meti-menu`, metimenu)
window.customElements.define(`details-menu`, detailmenu)

 let cardDes = document.createElement('meti-menu')
 let cardDesdetailmenu = document.createElement('details-menu')


window.addEventListener("DOMContentLoaded", async ()=>{
    
    let bb = await fetch("https://fakestoreapi.com/products/categories")

    if(bb.status===200){
        
        let ff = await bb.json()


        cardDes.setAttribute("options" , JSON.stringify(ff))

         $.getElementById("navs").appendChild(cardDes)
         
         $.getElementById("navs").appendChild(cardDesdetailmenu)

     
         

    }

    
    
})






















