
let getallprod = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let bbs = await data.json();
    return bbs;
}

let allprod = await getallprod()

const params = new URLSearchParams(window.location.search);

let idis = Number( params.get("id"))

let myid =  allprod.products.find(p => p.id===idis)

console.log(myid);

document.querySelector("#ps").textContent=myid.id
