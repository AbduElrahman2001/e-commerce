let username = document.querySelector("#name")
let pass = document.querySelector("#pass")
let alert1 = document.querySelector(".alert1")
let alert2 = document.querySelector(".alert2")
let btn = document.querySelector("#login")

let getname = localStorage.getItem("username")
let getpass = localStorage.getItem("password")

btn.addEventListener(("click") ,function(e){
    e.preventDefault()
    if(username.value === "" || pass.value === ""){
        alert1.style.display = "block"
    }else{
        if(getname && getname.trim() === username.value.trim() && getpass && getpass.trim() === pass.value){
            setTimeout(()=>{
                window.location = "home.html"
            } , 1500)
        }else{
            alert2.style.display = "block"
        }
    }

})