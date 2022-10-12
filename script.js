
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


// TRIGGERING CSS ANIMATION ON SCROLL


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.backimg-cont');

    if (entry.isIntersecting) {
      square.classList.add('bounce-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('bounce-animation');
  });
});
observer.observe(document.querySelector('.animation-wrapper'));