
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

window.onscroll = () => {
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
let li = document.querySelectorAll(".links");
let sec = document.querySelectorAll(".product-1");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 650 < sec[len].offsetTop) { }
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
        Imagetag: "image/product-2.png",
        price: 50,
        inCart: 0
    },
    {
        name: "Meat",
        Imagetag: "image/product-3.png",
        price: 140,
        inCart: 0
    },
    {
        name: "cabbage",
        Imagetag: "image/product-4.png",
        price: 40,
        inCart: 0
    },
    {
        name: "Aloo",
        Imagetag: "image/product-5.png",
        price: 50,
        inCart: 0
    },
    {
        name: "fresh organic",
        Imagetag: "image/product-6.png",
        price: 60,
        inCart: 0
    },
    {
        name: "carrot",
        Imagetag: "image/product-7.png",
        price: 80,
        inCart: 0
    },
    {
        name: "lemon",
        Imagetag: "image/product-8.png",
        price: 60,
        inCart: 0
    },
    {
        name: "almond",
        Imagetag: "image/product-9.jpg",
        price: 660,
        inCart: 0
    },
    {
        name: "pomegranate",
        Imagetag: "image/product-10.jpg",
        price: 70,
        inCart: 0
    },
    {
        name: "grapes",
        Imagetag: "image/product-11.png",
        price: 90,
        inCart: 0
    },
    {
        name: "white Apple",
        Imagetag: "image/product-12.png",
        price: 240,
        inCart: 0
    },
    {
        name: "ginger",
        Imagetag: "image/ginger-17.png",
        price: 85,
        inCart: 0
    },
    {
        name: "garlic",
        Imagetag: "image/ginger-17.png",
        price: 155,
        inCart: 0
    },
    {
        name: "bitter melon",
        Imagetag: "image/garlic-16.jpg",
        price: 150,
        inCart: 0
    },
    {
        name: "mango",
        Imagetag: "image/product-19.jpg",
        price: 45,
        inCart: 0
    },
    {
        name: "onion",
        Imagetag: "image/product-20.jpg",
        price: 80,
        inCart: 0
    },
    {
        name: "papaya",
        Imagetag: "image/product-21.png",
        price: 35,
        inCart: 0
    },
    {
        name: "palak",
        Imagetag: "image/product-23.jpg",
        price: 20,
        inCart: 0
    },
    {
        name: "yellow watermelon",
        Imagetag: "image/product-24.jpg",
        price: 60,
        inCart: 0
    },
    {
        name: "Desi vegetable",
        Imagetag: "image/cat-1.png",
        price: 50,
        inCart: 0
    },
    {
        name: "vegetable",
        Imagetag: "image/cat-2.png",
        price: 45,
        inCart: 0
    },
    {
        name: "milk",
        Imagetag: "image/cat-3.png",
        price: 70,
        inCart: 0
    },
    {
        name: "Mutton",
        Imagetag: "image/cat-4.png",
        price: 170,
        inCart: 0
    },
    {
        name: "Dry fruit",
        Imagetag: "image/product-9.jpg",
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
};

function totalCost(product) {
    // console.log("product price", product.price)

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
    let cartItems = localStorage.getItem("ProductInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart = 1;
    }
    else {
        product.inCart += 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function displayCart() {
    let cartItems = localStorage.getItem("productInCart");
    let cartCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);
    let productContai = document.querySelector(".products")
    console.log(cartItems)
    if (cartItems && productContai) {
        productContai.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContai.innerHTML += `
            
            <div class="product">  
               <span><i class="fa fa-times"></i></span>
               <span>${item.name}</span>
               <img src="${item.Imagetag}">
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
        productContai.innerHTML += `
        <div class="totalPrice">
        <h4 class="totalTitle"> Total </h4>
        <h4 class="totalCost"> ₹${cartCost} </h4>
        </div>`
        productContai.innerHTML += `
        <div class="order">
        <a href="" class="btn">order now</a>
        </div>`
        console.log("running")
    }
    console.log(cartItems)
}
onLoadCart();

displayCart();
