
// Hamburger Menu Mobile
let toggleButton = document.getElementById('ham-button');
let navList = document.getElementById('ham-active');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('ham-active1');
})


// Active menu on scroll

const sections = document.querySelectorAll(".header-offset");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
