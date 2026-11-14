let sideMenu = document.getElementById("side-menu");
let closeMenu = document.getElementById("close-menu");
let menuButton =document.getElementById('operate-menu');
let isOpen = false;
function openMenu(){
    console.log('function call is active')
    sideMenu.classList.add('open');
}
menuButton.addEventListener('click',()=>{
    openMenu();
});
closeMenu.addEventListener('click',()=>{
    sideMenu.classList.remove('open');
})