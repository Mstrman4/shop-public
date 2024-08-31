
const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/menu/menu.css">





  <div class=" shadow-xl rounded-md z-50 p-4 absolute
     bg-white
       w-8/12 left-[30%] 
       sm:w-5/12 sm:left-[50%] 
       md:w-4/12 md:left-[60%] 
       lg:w-4/12 lg:left-[50%] 
       xl:w-3/12 xl:left-[60%] 
        top-28  hover-menu" >
        <div class="img-user flex gap-3 border-b-2 p-2 ">
            <img src="img/Frame 3.png" class="w-1/5" alt="">
            <div>
                <h1 class="text-justify font-extrabold">yelena stacia</h1>
                <span class="font-normal text-gray-500">pelatinium member </span>
        </div>
        </div>
        <div class="wallet flex flex-col border-b-2 p-2 gap-2 ">
            <span class="font-bold text-gray-400">wallet</span>
            <div class="flex justify-between">
                <a href="#" class="text font-normal text-gray-400"> <i class="mr-2 fa-regular fa-money-bills text-black"></i> lenny balance</a>
                <p class="font-medium">$928,24</p>

            </div>
            <div class="flex justify-between">
                <a href="#" class="text font-normal text-gray-400"> <i class="fa-regular fa-circle-euro text-black mr-2"></i> lenny coin</a>
                <p>$928,24</p>

            </div>
        </div>
        <div class="menu-mini flex flex-col border-b-2 pb-2 p-2 my-3 gap-2 ">
            <span class="font-bold text-gray-400">menu</span>
            <div class="flex justify-between">
                <a href="#" class="text font-normal text-gray-400"> <i class="fa-regular fa-cart-shopping text-black mr-2"></i> Purchase</a>


            </div>
            <div class="flex justify-between">
                <a class="text font-normal text-gray-400" href="#"><i class="fa-regular fa-regular fa-heart text-black mr-2"></i> Wishlist </a>


            </div>
            <div class="flex justify-between">
                <a class="text font-normal text-gray-400" href="#"><i class="fa-regular fa-regular fa-gear text-black mr-2"></i> setting </a>


            
            </div>
        </div>
        <div class="menu-signout flex flex-col  p-2 gap-2">
            <a href="#" class="text font-normal text-red-600"> <i class="fa-regular fa-arrow-right-from-bracket text-red-600 mr-2"></i> sign out</a>
        </div>
       </div>








`
class detailmenu extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){

        this.classList.add("hidden")

            }







        
    }


export { detailmenu }