
let getallprod = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let bbs = await data.json();
    return bbs;
    
}

let allprod = await getallprod()

const params = new URLSearchParams(window.location.search);

const searchQuery = params.get('search')
const catgQuery = params.get('catg')

if(catgQuery){

    let data = await fetch(`https://dummyjson.com/products/category/${catgQuery}`);
    let bbs = await data.json();
    console.log("دسته بندی");
    
}
if (searchQuery) {
    let data = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    let bbs = await data.json();
    if(bbs.limit==0){
        console.log("محصول نیست");
        
    }
    console.log(bbs.products);
    
}
