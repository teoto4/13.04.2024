const burgerBtn = document.getElementById("burger_btn");
const burgerNav = document.getElementById("burger_nav");



burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    burgerNav.classList.add('active');
})