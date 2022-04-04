let navBar = document.getElementById('navigation');
let burgerBar = document.getElementById('burgerBar');
burgerBar.addEventListener('click',function() {
    navBar.classList.toggle('activenav');
} )