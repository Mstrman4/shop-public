const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/menu/menu.css">

                        <slot name=atg>

                        <i class="fa-solid fa-layer-group text-center w-full text-3xl"></i>
                        <slot name="catg"></slot>
                        <p class="text-sm text-gray-500">8.9k products</p>
                        </a>


        


`
class fetchcatg extends HTMLElement {
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
  fetchcatg
}



