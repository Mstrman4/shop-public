const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/menu/menu.css">



<img src="img/Logo.png"  class="hidden sm:block" alt="">

<div class="bg-[#F6F8FA] flex  rounded-md">

<select name="" id="selectElem" class="hidden md:block bg-transparent mx-3 font-bold"></select>

<div class="flex">
 <input type="search" placeholder="search prudoct" class="bg-transparent p-1 text-center" 	/>
 <button class="text-center flex text-gray-300 justify-center items-center mx-2"><i class="fa-light fa-magnifying-glass"></i></button>
</div>
</div>
<div class="flex justify-center items-center space-x-3 text-[#818B9C]">
<a href=# class="h-4"><i class="fa-solid fa-cart-shopping"></i></a>
<a href=# class="h-4 lg:hidden"><i class="fa-solid fa-bell"></i></a>
<a href=# class="h-4 lg:hidden"><i class="fa-solid fa-envelope"></i></a>
<div class=" user-icon border rounded-full flex justify-center items-center hidden lg:block p-2 ">  <i class="fa-solid fa-user"></i></div>

<div class="img-hj" > <img src="img/Frame 3.png" alt="" class="ml-4 hidden sm:block lg:hidden"></div>





<div class="tham tham-e-squeeze sm:hidden ml-3 tham-w-6"> 
     <div class="tham-box">
       <div class="tham-inner  bg-gray-400"/>
     </div>
   </div>
</div>




`
class metimenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {


    const tham = this.shadowRoot.querySelector(".tham");
    const usericon = this.shadowRoot.querySelector(".user-icon");
    const imghj = this.shadowRoot.querySelector(".img-hj");
    

    tham.addEventListener('click', (e) => {
      tham.classList.toggle('tham-active');
      document.querySelector(".hover-menu").classList.toggle("hidden")
      // if(e.target){

      // }

    });

    usericon.addEventListener('click', ()=>{
      document.querySelector(".hover-menu").classList.toggle("hidden")
    })
    imghj.addEventListener('click', ()=>{
      document.querySelector(".hover-menu").classList.toggle("hidden")
    })

    const selectElem = this.shadowRoot.querySelector('#selectElem');

    selectElem.classList.add("bg-blue-100")

    this.className = "flex justify-around items-center p-3 meti-menu"


    let options1 = JSON.parse(this.getAttribute("options"));

    options1.forEach(element => {
      let option = document.createElement("option")

      option.value = element;
      option.textContent = element;
      // option.classList.add("")

      selectElem.appendChild(option)
    });












    // Append options from light DOM to the shadow DOM select element
    // this.childNodes.forEach(option => {
    //     if (option.tagName === 'OPTION') {
    //         selectElem.appendChild(option.cloneNode(true));
    //     }
    // });

  }
}

export {
  metimenu
}