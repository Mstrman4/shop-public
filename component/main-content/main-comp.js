const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/main-content/menu.css">

      
        <div class="w-full  py-1  ">
        <!-- img -->
            <div class="bg-slate-300 flex justify-center relative min-h-[152px] lg:min-h-[218px] rounded-md">
                <slot name="mc-img" src="img/image 2.png" alt="">
               
            </div>
            <!-- img -->

            <!-- content -->
            <div class="flex justify-between my-3  ">
                <slot name="mc-name""></slot> <slot name=mc-price class="text-green-600 font-bold  text-xl">$45</slot>
            </div>

            <slot name="mc-brand"></slot>
            <div>

                <i class="fa-solid fa-star text-yellow-400 text-xl"></i> 
                <slot name="mc-rate"></slot>
                <span class="font-extrabold text-slate-300 text-3xl">.</span>
                <slot name="mc-stock"></slot>
            </div>
            <!-- content -->
        </div>

    

`
class mainContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

  }
}

export {
  mainContent
}