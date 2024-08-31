const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/menu/menu.css">

            <div class="flex flex-col gap-8 w-full py-12 sm:w-6/12 justify-center"  >
                <h1 class="font-extrabold text-left text-3xl text-x xl:text-4xl">Upgrade Your Wardrobe
                    With Our Collection </h1>
                <p class="text-slate-600 font-normal text-x xl:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia reprehenderit excepturi inventore dolorem dolores quis et recusandae sit voluptate laboriosam exercitationem sed dolorum nulla deleniti, cumque incidunt cupiditate error enim.</p>
                <div class="flex flex-wrap">
                    <button type="button" class="md:w-5/12 mx-1    text-white w-full bg-[#1E4C2F]  font-medium rounded-lg text-2xl font-extrabold px-5 py-2.5 mb-2 ">buy now</button>
                    <button type="button" class=" md:w-5/12 mx-1   w-full text-[#1E4C2F]  hover:text-white border border-[#1E4C2F] hover:bg-[#5d8b6e]  font-medium rounded-lg text-2xl px-5 py-2.5 text-center mb-2">view detail</button>
                </div>
            </div>



            <div class="flex flex-col gap-4 w-full relative justify-center p-3 sm:w-6/12 ">
               <img class="w-auto" src="img/image 4.png" alt="img">

               <div class="flex w-4/12 top-[40%] left-[30%] gap-2 p-3 bg-white rounded-md flex-col absolute sm:gap-1 sm:w-3/12 ">
               
                     <slot name="miniimg"></slot>
                     <slot name="minititle"></slot>
                     <slot name="minicat"></slot>
                     <slot name="rate"></slot>
            </div>


        
            </div>

`
class mainhaader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

    this.className="bg-[#f7f7f7] md:px-4 p-4  flex  w-full flex-wrap "

  }
}

export {
  mainhaader
}