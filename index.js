
let search = document.getElementById("search-btn");

search.addEventListener("click", () => {
   
    document.querySelector(".search-form").classList.toggle("show-search");
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".login-form").classList.remove("active");
    
});

let menu = document.querySelector("#menu-btn");
menu.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show-menu");
    document.querySelector(".search-form").classList.remove("show-search");
    document.querySelector(".login-form").classList.remove("active");


})

let login = document.querySelector("#login-btn");
login.addEventListener("click", () => {
    document.querySelector(".login-form").classList.toggle("active");
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".search-form").classList.remove("show-search");
})

window.onscroll = () => {
    document.querySelector(".navbar").classList.remove("show-menu");
    document.querySelector(".search-form").classList.remove("show-search")
    document.querySelector(".login-form").classList.remove("active");
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
    while(--len && window.scrollY + 600 < sec[len].offsetTop){}
    li.forEach(Itx => Itx.classList.remove("active1"));
    li[len].classList.add("active1");

}
activeMenu();

window.addEventListener("scroll", activeMenu);


