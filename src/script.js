// navigation
const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav");
const buttonOpen = document.querySelector(".menu_btn_open");
const buttonClose = document.querySelector(".menu_btn_close");
// fade-up
const lagParent = document.querySelectorAll(".lagParent");
const fadeUpChildren = document.querySelectorAll(".fade-up");
// fade-in
const fadeInChildren = document.querySelectorAll(".fade-in");
console.log(buttonOpen);

const toggleMenu = () => {
	nav.classList.toggle("open");
	buttonOpen.classList.toggle("active");
	buttonClose.classList.toggle("active");
};
menuBtn.addEventListener("click", toggleMenu);

// add delay for each item
lagParent.forEach((el) => {
	let children = el.children;
	for (j = 0; j < children.length; j++) {
		children[j].style.animationDelay = String(j * (1 / children.length) + "s");
	}
});

let option = { threshold: 0.4 };

const upObserver = new IntersectionObserver(handleUp, option);
fadeUpChildren.forEach((el) => {
	upObserver.observe(el);
});
function handleUp(entries) {
	entries.forEach((el) => {
		el.isIntersecting && el.target.classList.add("huwa");
	});
}

const inObserver = new IntersectionObserver(handleIn, option);
fadeInChildren.forEach((el) => {
	inObserver.observe(el);
});
function handleIn(entries) {
	entries.forEach((el) => {
		el.isIntersecting && el.target.classList.add("huwa");
	});
}
