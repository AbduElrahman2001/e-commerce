let username = document.querySelector("#name")
let pass = document.querySelector("#pass")
let mail = document.querySelector("#mail")
let alert1 = document.querySelector(".alert1")
let btn = document.querySelector("#register")

btn.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value ===""|| mail.value === "" || pass.value === ""){
        alert1.style.display = "block"
    }
    else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("password" , pass.value)
        localStorage.setItem("email" , mail.value)

        setTimeout(()=>{
            window.location = "login.html"
        } , 1500)
    }
})