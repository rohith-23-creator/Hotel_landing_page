// Adding event listener to show the SideNav
const navs =  document.getElementById("nav-items");
const bars = document.getElementById("bars").addEventListener("click", openNav);
function openNav(e){
    navs.classList.toggle("open-nav");
};


// function to close the menu when clicked outside SideNav.
window.addEventListener("click", function(e){
    const bars = document.getElementById("bars")
    if(e.target != bars && e.target.parentNode != bars){
        navs.classList.remove("open-nav");
    }
})