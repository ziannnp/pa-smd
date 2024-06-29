window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a::before");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("nav ul li a::before[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

const toggle = document.querySelector("nav .toggle");
const nav = document.querySelector("nav ul");
const akun = document.querySelector("nav .akun");
const nap = document.querySelector("nav");
const x = document.querySelector("nav .toggle #x");
const y = document.querySelector("nav .toggle #y");

const more = document.querySelector(".more");
const tutup = document.querySelector(".selengkapnya .img");
const abc = document.querySelector(".selengkapnya");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  akun.classList.toggle("slide");
  nap.classList.toggle("slide");
  x.classList.toggle("slide");
  y.classList.toggle("slide");
});

more.addEventListener("click", function () {
  abc.classList.toggle("more");
  tutup.classList.remove("more");
});

tutup.addEventListener("click", function () {
  abc.classList.remove("more");
});
