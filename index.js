
"use strict";

/*---------------------------start- background-color c---------------------------------- */
const body = document.querySelector(".body");
const button = document.querySelector("#change-color");
function toggleDark() {
    button.classList.toggle("fa-moon-o");
    body.classList.toggle("dark-mode")
    if (!body.classList.contains("dark-mode")) {
        return localStorage.setItem("theme", "light");
    }
    localStorage.setItem("theme", "dark-mode");
   
    if (!button.classList.contains("fa-moon-o")){
        return localStorage.setItem("icons", "fa-sun-o");
    }
    localStorage.setItem("icons", "fa-moon-o");
}
let mode = localStorage.getItem("theme")
    if (mode && mode === "dark-mode") {
        body.classList.add("dark-mode");
    }
let icons = localStorage.getItem("icons");
    if (icons && icons === "fa-moon-o"){
        button.classList.add("fa-moon-o")
    }

document.querySelector('#change-color').addEventListener('click', toggleDark);
/*--------------------------------end------------------------------------*/


/*------------------------------start-------------------------------- */
let search = document.getElementById("search-btn");

search.addEventListener("click", () => {

    document.querySelector(".search-form").classList.toggle("show-search");
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".login-form").classList.remove("active");
    document.querySelector(".product-container").classList.remove("bar")

});

let menu = document.querySelector("#menu-btn");
menu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show-menu");
    document.querySelector(".search-form").classList.remove("show-search");
    document.querySelector(".login-form").classList.remove("active");
    document.querySelector(".product-container").classList.remove("bar")


})
let cart = document.querySelector("#cart-btn");
cart.addEventListener("click", () => {
    document.querySelector(".product-container").classList.toggle("bar")
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".search-form").classList.remove("show-search")
    document.querySelector(".login-form").classList.remove("active");
})
let login = document.querySelector("#login-btn");
login.addEventListener("click", () => {
    document.querySelector(".login-form").classList.toggle("active");
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".search-form").classList.remove("show-search");
    document.querySelector(".product-container").classList.remove("bar")
})

window.scroll = () => {
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".search-form").classList.remove("show-search")
    document.querySelector(".login-form").classList.remove("active");
    document.querySelector(".product-container").classList.remove("bar")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".main-header").style.top = "0px";
    } else {
        document.querySelector(".main-header").style.top = "-100px";
    }

}
/*----------------------------------end---------------------------- */
let li = document.querySelectorAll(".links");
let sec = document.querySelectorAll(".product-1");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 600 < sec[len].offsetTop) { }
    li.forEach(Itx => Itx.classList.remove("active1"));
    li[len].classList.add("active1");

}
activeMenu();

window.addEventListener("scroll", activeMenu);


// ----------add-to-cart----
let products = [


    {
        name: "orange",
        ImageTag: "image/product-1.png",
        price: 60,
        inCart: 0
    },

    {
        name: "onion",
        ImageTag: "image/product-2.png",
        price: 50,
        inCart: 0
    },
    {
        name: "Meat",
        ImageTag: "image/product-3.png",
        price: 140,
        inCart: 0
    },
    {
        name: "cabbage",
        ImageTag: "image/product-4.png",
        price: 40,
        inCart: 0
    },
    {
        name: "Aloo",
        ImageTag: "image/product-5.png",
        price: 50,
        inCart: 0
    },
    {
        name: "fresh organic",
        ImageTag: "image/product-6.png",
        price: 60,
        inCart: 0
    },
    {
        name: "carrot",
        ImageTag: "image/product-7.png",
        price: 80,
        inCart: 0
    },
    {
        name: "lemon",
        ImageTag: "image/product-8.png",
        price: 60,
        inCart: 0
    },
    {
        name: "almond",
        ImageTag: "image/product-9.jpg",
        price: 660,
        inCart: 0
    },
    {
        name: "pomegranate",
        ImageTag: "image/product-10.jpg",
        price: 70,
        inCart: 0
    },
    {
        name: "grapes",
        ImageTag: "image/product-11.png",
        price: 90,
        inCart: 0
    },
    {
        name: "white Apple",
        ImageTag: "image/product-12.png",
        price: 240,
        inCart: 0
    },
    {
        name: "ginger",
        ImageTag: "image/ginger-17.png",
        price: 85,
        inCart: 0
    },
    {
        name: "garlic",
        ImageTag: "image/ginger-17.png",
        price: 155,
        inCart: 0
    },
    {
        name: "bitter melon",
        ImageTag: "image/garlic-16.jpg",
        price: 150,
        inCart: 0
    },
    {
        name: "mango",
        ImageTag: "image/product-19.jpg",
        price: 45,
        inCart: 0
    },
    {
        name: "onion",
        ImageTag: "image/product-20.jpg",
        price: 80,
        inCart: 0
    },
    {
        name: "papaya",
        ImageTag: "image/product-21.png",
        price: 35,
        inCart: 0
    },
    {
        name: "palak",
        ImageTag: "image/product-23.jpg",
        price: 20,
        inCart: 0
    },
    {
        name: "yellow watermelon",
        ImageTag: "image/product-24.jpg",
        price: 60,
        inCart: 0
    },
    {
        name: "Desi vegetable",
        ImageTag: "image/cat-1.png",
        price: 50,
        inCart: 0
    },
    {
        name: "vegetable",
        ImageTag: "image/cat-2.png",
        price: 45,
        inCart: 0
    },
    {
        name: "milk",
        ImageTag: "image/cat-3.png",
        price: 70,
        inCart: 0
    },
    {
        name: "Mutton",
        ImageTag: "image/cat-4.png",
        price: 170,
        inCart: 0
    },
    {
        name: "Dry fruit",
        ImageTag: "image/product-9.jpg",
        price: 240,
        inCart: 0
    },
]


// all codes is here for add to cart


let carts = document.querySelectorAll(".cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {

        cartNumber(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCart() {
    let productNumber = localStorage.getItem("cartNumber");
    if (productNumber) {
        document.querySelector(".cart-1 span").textContent = productNumber;
    }
}

function cartNumber(product) {
    console.log(product)
    let productNumber = localStorage.getItem("cartNumber");
    productNumber = parseInt(productNumber);

    if (productNumber) {

        localStorage.setItem("cartNumber", productNumber + 1);
        document.querySelector(".cart-1 span").textContent = productNumber + 1;
    }
    else {
        localStorage.setItem("cartNumber", 1);
        document.querySelector(".cart-1 span").textContent = 1;
    }
    setItem(product);
}

function totalCost(product) {
   

    let cartCost = localStorage.getItem("totalCost");

    console.log("my cartCost is", cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }


}

function setItem(product) {
    let cartItems = localStorage.getItem("productInCart");
    
    cartItems = JSON.parse(cartItems);
    
    if (cartItems != null) {

        if (cartItems[product.ImageTag] == undefined) {
            
            cartItems = {

                ...cartItems,
                [product.ImageTag]: product
            }
            
        }
      
       
        cartItems[product.ImageTag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.ImageTag]: product
        }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}


function displayCart() {
    let cartItems = localStorage.getItem("productInCart");
    let cartCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);
    let productContain = document.querySelector(".products")

    if (cartItems && productContain) {
        productContain.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContain.innerHTML += `
            
            <div class="product">  
               <span><i class="fa fa-times"></i></span>
               <span>${item.name}</span>
               <img src="${item.ImageTag}">
               <div class="price2">
               ₹${item.price}
               </div>
                <div class="quantity1">
                   <i class="fa fa-chevron-circle-left"></i>
                   <span>${item.inCart}</span>
                   <i class="fa fa-chevron-circle-right"></i>
               </div>
               <div class="total">
               ₹${item.inCart * item.price}
               </div>
            </div>
           <hr>
           `
        });
        productContain.innerHTML += `
        <div class="totalPrice">
        <h4 class="totalTitle"> Total </h4>
        <h4 class="totalCost"> ₹${cartCost} </h4>
        </div>`
        productContain.innerHTML += `
        <div class="order">
        <a href="" class="btn" id=order-now>order now</a>
        </div>`
        
    }
    console.log(cartItems)
}
onLoadCart();

displayCart();
let shop = document.querySelector("#order-now");
shop.addEventListener("click", () => {
    var a = confirm("complete your order")
    if (a == true) {
        alert("your order is done!....")

        localStorage.clear()
    }
    else {
        alert("your order is cancel...")
    }

});
