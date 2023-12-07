// <!-- -------javascript for toggle Menu--- -->
var navLinks = document.querySelector("#navLinks");
document.querySelector(".fa-times").addEventListener("click", function(){
    
    navLinks.style.right = "-50%";
    

} )
document.querySelector(".fa-bars").addEventListener("click",function(){
     navLinks.style.right = "0%";
    
} )

// toggle dark theme

const icon = document.querySelector("#icon");
const theme  = localStorage.getItem("theme");
const button = localStorage.getItem("button");
const banner2 = document.querySelector(".cta");
const subHeader = document.querySelector(".sub-header");

if (button){icon.src = (button);}


if(banner2 && button){banner2.style.backgroundImage = "url('Assets/banner2-dark.avif')";}   

if(subHeader && button){ subHeader.style.backgroundImage = "url('Assets/background-dark.avif')";}    

   
if (theme){  document.body.classList.add(theme);}


icon.addEventListener("click",function(){
    document.body.classList.toggle("black-theme");
    if (document.body.classList.contains("black-theme")) {
        if (banner2){ 
            banner2.style.backgroundImage = "url('Assets/banner2-dark.avif')"}
        if (subHeader){subHeader.style.backgroundImage = "url('Assets/background-dark.avif')"}
        icon.src = "Assets/sun.png";
        localStorage.setItem("button","Assets/sun.png")
        localStorage.setItem("theme","black-theme");
    } else {
        if (banner2){ 
            banner2.style.backgroundImage = "url('Assets/banner2.avif')"}
        if (subHeader){subHeader.style.backgroundImage = "url('Assets/background.avif')"}
        icon.src = "Assets/moon.png";
        localStorage.removeItem("button")
        localStorage.removeItem("theme");
    }
   
}
)
