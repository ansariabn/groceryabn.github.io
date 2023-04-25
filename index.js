
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

    if (!button.classList.contains("fa-moon-o")) {
        return localStorage.setItem("icons", "fa-sun-o");
    }
    localStorage.setItem("icons", "fa-moon-o");
}
let mode = localStorage.getItem("theme")
if (mode && mode === "dark-mode") {
    body.classList.add("dark-mode");
}
let icons = localStorage.getItem("icons");
if (icons && icons === "fa-moon-o") {
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
        id: 1,
        name: "orange",
        ImageTag: "image/product-1.png",
        price: 60,
        inCart: 0
    },

    {
        id: 2,
        name: "onion",
        ImageTag: "image/product-2.png",
        price: 50,
        inCart: 0
    },
    {
        id: 3,
        name: "Meat",
        ImageTag: "image/product-3.png",
        price: 140,
        inCart: 0
    },
    {
        id: 4,
        name: "cabbage",
        ImageTag: "image/product-4.png",
        price: 40,
        inCart: 0
    },
    {
        id: 5,
        name: "Aloo",
        ImageTag: "image/product-5.png",
        price: 50,
        inCart: 0
    },
    {
        id: 6,
        name: "fresh organic",
        ImageTag: "image/product-6.png",
        price: 60,
        inCart: 0
    },
    {
        id: 7,
        name: "carrot",
        ImageTag: "image/product-7.png",
        price: 80,
        inCart: 0
    },
    {
        id: 8,
        name: "lemon",
        ImageTag: "image/product-8.png",
        price: 60,
        inCart: 0
    },
    {
        id: 9,
        name: "almond",
        ImageTag: "image/product-9.jpg",
        price: 660,
        inCart: 0
    },
    {
        id: 10,
        name: "pomegranate",
        ImageTag: "image/product-10.jpg",
        price: 70,
        inCart: 0
    },
    {
        id: 11,
        name: "grapes",
        ImageTag: "image/product-11.png",
        price: 90,
        inCart: 0
    },
    {
        id: 12,
        name: "white Apple",
        ImageTag: "image/product-12.png",
        price: 240,
        inCart: 0
    },
    {
        id: 13,
        name: "ginger",
        ImageTag: "image/ginger-17.png",
        price: 85,
        inCart: 0
    },
    {
        id: 14,
        name: "garlic",
        ImageTag: "image/ginger-17.png",
        price: 155,
        inCart: 0
    },
    {
        id: 15,
        name: "bitter melon",
        ImageTag: "image/garlic-16.jpg",
        price: 150,
        inCart: 0
    },
    {
        id: 16,
        name: "mango",
        ImageTag: "image/product-19.jpg",
        price: 45,
        inCart: 0
    },
    {
        id: 17,
        name: "onion",
        ImageTag: "image/product-20.jpg",
        price: 80,
        inCart: 0
    },
    {
        id: 18,
        name: "papaya",
        ImageTag: "image/product-21.png",
        price: 35,
        inCart: 0
    },
    {
        id: 19,
        name: "palak",
        ImageTag: "image/product-23.jpg",
        price: 20,
        inCart: 0
    },
    {
        id: 20,
        name: "yellow watermelon",
        ImageTag: "image/product-24.jpg",
        price: 60,
        inCart: 0
    },
    {
        id: 21,
        name: "Desi vegetable",
        ImageTag: "image/cat-1.png",
        price: 50,
        inCart: 0
    },
    {
        id: 22,
        name: "vegetable",
        ImageTag: "image/cat-2.png",
        price: 45,
        inCart: 0
    },
    {
        id: 23,
        name: "milk",
        ImageTag: "image/cat-3.png",
        price: 70,
        inCart: 0
    },
    {
        id: 24,
        name: "Mutton",
        ImageTag: "image/cat-4.png",
        price: 170,
        inCart: 0
    },
    {
        id: 25,
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
        Object.values(cartItems).map((item) => {
            let { id, name, ImageTag, price, inCart } = item
            productContain.innerHTML += `
            
            <div id = product1-${id} class="product-one">  
               <span onclick="cancel(${id})" ><i class="fa fa-times"></i></span>
               <span>${name}</span>
               <img src="${ImageTag}">
               <div class="price2">
               ₹${price}
               </div>
                <div class="quantity1">
                 
                   <span id= ${id}>${inCart}</span>
                 
               </div>
               <div class="total">
               ₹${inCart * price}
               </div>
            </div>
           <hr>
           `
        });
        productContain.innerHTML += `
        <div class="totalPrice">
        <h4 class="totalTitle"> Total </h4>
        <h4 class="totalCost"> ₹ ${cartCost} </h4>
        </div>`
        productContain.innerHTML += `
        <div class="order">
        <a href="" class="btn" id="order-now">order now</a>
        </div>`

    }
    console.log(cartItems)
}


let count = 1;
let cancel = (id) => {
    let productContain = document.querySelector(".product-one");

    let select = id;

    let b = products.find((x) => x.id == select)

    let cartItems = localStorage.getItem("productInCart");
  
    productContain.remove(b);

    cartItems = parseInt(cartItems)

    let cartCost = localStorage.getItem("totalCost");

    cartCost = parseInt(cartCost)

    let productNumber = localStorage.getItem("cartNumber");

    if (b.id) {
        document.querySelector(".totalCost").innerHTML = "₹ " + eval(cartCost - b.price);
    }
    

    if (productNumber != 0) {
        localStorage.removeItem("productInCart");
        document.querySelector(".cart-1 span").textContent -= count;

        
    }
    localStorage.removeItem("cartNumber");
   

    localStorage.setItem("totalCost", cartCost - b.price);
    localStorage.removeItem("totalCost");
}


let increament = (id) => {
    let selectedItem = id;
    let search = products.find((x) => x.id === selectedItem);

    let cartCost = localStorage.getItem("totalCost");
    let productNumber = localStorage.getItem("cartNumber");

    productNumber = parseInt(productNumber);

    let count1 = document.querySelectorAll(".quantity1 span");
    for (let i = 0; i < count1.length; i++) {
        count1[i].innerHTML = productNumber;
    }

    cartCost = parseInt(cartCost)
    document.querySelector(".totalCost").innerHTML = "₹ " + eval(cartCost + search.price);

    cartNumber(search)
    totalCost(search);


}
let decrement = (id) => {
   
    let select = id;

    let b = products.find((x) => x.id == select.id)

    let cartItems = localStorage.getItem("productInCart");

    cartItems = parseInt(cartItems)

    let cartCost = localStorage.getItem("totalCost");

    cartCost = parseInt(cartCost)

    let productNumber = localStorage.getItem("cartNumber");

    if (cartCost) {
        document.querySelector(".totalCost").innerHTML = "₹ " + eval(cartCost - b.price);
    }
    else {
        document.querySelector(".totalCost").innerHTML = 0
    }

    if (productNumber != 0) {
        localStorage.removeItem("productInCart");
        document.querySelector(".cart-1 span").textContent -= count;

        localStorage.removeItem("cartNumber");
    }

 
}
onLoadCart();

displayCart();



let shop = document.querySelector("#order-now");
shop.addEventListener("click", () => {
    var a = confirm("complete your order")
    if (a == true) {
        alert("your order is done!....")

        localStorage.removeItem("productInCart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("cartNumber");
        localStorage.removeItem("product");
        localStorage.clear();
    }
    else {
        alert("your order is cancel...")
    }

});




// var remov = document.querySelector(".fa-times");
// remov.addEventListener("click", (product) => {
//     let productContain = document.querySelectorAll(".product-one");

//     for (let j = 0; j < productContain.length; j++) {

//         productContain[j].remove(id);
//         localStorage.removeItem("productInCart", products);
//         localStorage.removeItem("totalCost", product.price);
//         localStorage.removeItem("cartNumber",);


//     }


// })

// let count = 1;

// var increase = document.querySelector(".fa-plus");
// increase.addEventListener("click", (product) => {
//     var inc = document.querySelector(".quantity1 span");
//     count++;
//     inc.innerHTML = count;
// });

// var drease = document.querySelector(".fa-minus");
// drease.addEventListener("click", (product) => {
//     var de = document.querySelector(".quantity1 span");

//     count--;
//     de.innerHTML = count;
// });
// let decrement = (id) => {
//     let selectedItem = id;
//     let search = products.find((x) => x.id === selectedItem)
//     console.log(search);
//     let cartCost = localStorage.getItem("totalCost");
//     cartCost = parseInt(cartCost)
//     document.querySelector(".totalCost").innerHTML = "₹ " + eval( cartCost - search.price);

//     localStorage.setItem("totalCost", cartCost - search.price);
//     if (search.inCart === 0) {

//         return;

//     }
//     else {
//         search.inCart -=1;
//     }


// }
