const displayLocalStorageCart=()=>{
const cart=getCart();
for (const names in cart){
    displayProduct(names)
}
}

const addItem=()=>{
    const nameFeild=document.getElementById('product-name');
    names=nameFeild.value;
    nameFeild.value='';
    if(!names){
        return;
    }
// add to local storage 
displayProduct(names)
addProductToCart(names)
//display in the ui



    

}
const displayProduct=(names)=>{
const ul=document.getElementById('products')
const li =document.createElement('li')
li.innerText=names
ul.appendChild(li)
}
const getCart=()=>{
    const cart=localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart)
    }
    else{
        cartObj={};
    }
    return cartObj
}
const addProductToCart=names=>{
    const cart=getCart();
    cart[names]=1
    console.log(cart);
    const cartStrignfied=JSON.stringify(cart)
    localStorage.setItem('cart',  cartStrignfied)
}

displayLocalStorageCart()