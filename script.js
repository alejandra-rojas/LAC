// Reducing header height on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "80px";
    document.getElementById("logo").style.height = "80px";
  } else {
    document.getElementById("logo").style.width = "140px";
    document.getElementById("logo").style.height = "140px";
  }
}

// Hamburger Menu Mobile
let toggleButton = document.getElementById('ham-button');
let navList = document.getElementById('ham-active');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('ham-activeb');
})


// Active menu on scroll

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};