const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav");

const toggleMenu = () => {
	nav.classList.toggle("open");
};

menuBtn.addEventListener("click", toggleMenu);
