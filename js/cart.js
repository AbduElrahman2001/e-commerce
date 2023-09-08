let productStore = localStorage.getItem("productadded")
let allproduct = document.querySelector(".all")

if(productStore){
    let item = JSON.parse(productStore)
    restoreProduct(item)
}
    function restoreProduct(product){
        let y = product.map((item)=>{
            return `
            <section class="sec">
            <div class="products">
                <div class="card" >
                    <div class="imag"><img src="${item.imgURl}" alt=""></div>
                    <div class="desc">${item.type}</div> 
                    <div class="cart">
                        <div class="title">${item.desc}</div>
                    </div>
                    <div class="box1">
                        <div class="price">${item.price}$</div>
                        <button class="btn" onclick = "removeOne(${item.id})">Remove from Cart</button>
                    </div>
                </div>
            </div>
        </section>
            `
        })
        allproduct.innerHTML = y
    }
    restoreProduct()




