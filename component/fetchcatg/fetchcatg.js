const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">
  <link rel="stylesheet" href="component/menu/menu.css">

  
                        <i class="fa-solid fa-layer-group text-center w-full text-3xl"></i>
                        <slot name="catg"></slot>
                        <p class="text-sm text-gray-500">8.9k products</p>
             


        


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

    this.className="category-box bg-white border border-gray-300 p-4 text-green-900 rounded-lg shadow-md  text-center"
  }
}

export {
  fetchcatg
}