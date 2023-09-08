// localStorage.setItem("item name"  , "short" )
// console.log(localStorage.getItem("item name"))
// localStorage.removeItem("item name")

let link1 = document.querySelector("#links")
let tap = document.querySelector("#tap")
let tap1 = document.querySelector("#tap1")

if(localStorage.getItem("username")){
    link1.remove()
    tap.style.display = "blocl"
    tap.style.marginTop = "15px"
    tap.style.fontSize = "30px"
    tap1.innerHTML ="Welcome "+ localStorage.getItem("username")
} else{tap.style.display = "none"}

// //////////////////////////////////////////////////////////////
let allproduct = document.querySelector(".all")
let product = [{
    id : 1,
    type : "chair",
    desc :  "living room chair",
    price : 100 , 
    imgURl : "../images2/chair3.jpg"
},{
    id : 3,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 4,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 5,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 6,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 7,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 8,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
},{
    id : 9,
    type : "table",
    desc :  "stand table",
    price : 50 , 
    imgURl : "../images2/chair4.jpg"
}]

function createProduct (){
    let y = product.map((item)=>{
        return `
        <section class="sec">
        <div class="products">
            <div class="card" >
                <div class="imag"><img src="${item.imgURl}" alt=""></div>
                <div class="desc">${item.type}</div> 
                <div class="cart">
                    <div class="title">${item.desc}</div>
                    <i class="far fa-heart"></i>
                </div>
                <div class="box1">
                    <div class="price">${item.price}$</div>
                    <button class="btn" onclick = "addone(${item.id})">Add To Cart</button>
                </div>
            </div>
        </div>
    </section>
        `
    })
    allproduct.innerHTML = y
}
createProduct()
// ///////////////////////////////////////////////
let cartProductDiv = document.querySelector(".shopping_detail div")
let badge = document.querySelector(".badge")
let btn1 = document.querySelector("btn")

addedItem = localStorage.getItem("productadded")? JSON.parse(localStorage.getItem("productadded")) : []

if(addedItem){
    addedItem.map(item =>{
        cartProductDiv.innerHTML += `<p>${item.type}</p>`
    })
    cartProductDiv.style.textAlign = "center"
    cartProductDiv.style.color = "white"
    badge.style.display = "block"
    badge.style.position = "absolute"
    badge.style.top = "0"
    badge.style.right = "0"
    badge.innerHTML = addedItem.length
} 

    if(localStorage.getItem = "username"){
        function addone(id){
            choosenItem = product.find((item)=> item.id === id)
            cartProductDiv.innerHTML += `<p>${choosenItem.type}</p>`

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("productadded", JSON.stringify(addedItem) )

            cartProductDiv.style.textAlign = "center"
            cartProductDiv.style.color = "white"
            badge.style.display = "block"
            badge.style.position = "absolute"
            badge.style.top = "0"
            badge.style.right = "0"
        
            cartLength = document.querySelectorAll(".shopping_detail div p")
            badge.innerHTML = cartLength.length
        }
    } 
    // btn.onclick =  alert("You Have To Register First")
    
//////////////////////////////////////////////////////
//btn
let cartBTN = document.querySelector("#cartBTN")

function cartOpen(e){
    e.preventDefault()
    window.open("cartProducts.html" , "", "width = 500 , height = 500")
}
cartBTN.onclick = cartOpen


//////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector("#shopping_cart")
let shopping_detail = document.querySelector(".shopping_detail")

shoppingCartIcon.addEventListener("click", openCart)

function openCart(){
    if(cartProductDiv.innerHTML !=""){
        if(shopping_detail.style.display =="block"){
            shopping_detail.style.display = "none"
        }else{shopping_detail.style.display ="block"}
    }
}
////////////////////////////////////////////////////////
// /logout

let logout = document.querySelector("#user")

logout.addEventListener("click" , function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "register.html"
    } , 1000)
})
