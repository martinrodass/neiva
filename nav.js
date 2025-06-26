const buttonNav = document.getElementById("buttonNav");
const nav= document.getElementById("topNav");
const subHeader = document.getElementById("subHeader");
function closeNav() {
  nav.style.top = "0";
  subHeader.style.top = "90px";
}
function openNav() {
  nav.style.top = "90px";
  subHeader.style.top = "180px";
}

buttonNav.addEventListener("click", ()=>{
    const currentTop = window.getComputedStyle(nav).top;
    if(nav.style.top === "0px"){ 
       openNav();
    }else{
        closeNav();
    }
});

document.addEventListener("click",(event)=>{
    const clickOnButtonNav= buttonNav.contains(event.target);
    const clickOnNav = nav.contains(event.target);
    if(!clickOnButtonNav && !clickOnNav){
        closeNav();
    }
})

document.addEventListener("scroll", () => {
  closeNav();
});