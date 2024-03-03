// Menu Bar

const head = document.querySelector(".header");
const nav = document.querySelector(".menu-bar");

nav.addEventListener("click", () => {
    head.classList.toggle("active");
});

// portfolio section

const p_btns = document.querySelector(".portfolio-buttons");
const p_btn = document.querySelectorAll(".p-btn");
const overlay = document.querySelectorAll(".overlay-image");


p_btns.addEventListener('click', (e) => {
    const p_btn_data = e.target;

    if (!p_btn_data.classList.contains("p-btn")) return;

    p_btn.forEach((element) => {
        element.classList.remove("p-btn-active");
    });

    p_btn_data.classList.add("p-btn-active");

    const p_btn_values = p_btn_data.dataset.btnNum;

    const overlayImg = document.querySelectorAll(`.p-btn--${p_btn_values}`);

    overlay.forEach((element) => {
        element.classList.add("p-btn-not-active");
    });

    overlayImg.forEach((element) => {
        element.classList.remove("p-btn-not-active")
    });
});

// Footer Copyrights

document.getElementById("copyrights").innerHTML = new Date().getFullYear();

// Swiper Testimonial
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Swiper Responsive 780px

const responsive = (size) => {
    if (size.matches) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,

            // rest will automatically called as it is declared already
        });
    }
    else {
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
}
const size = window.matchMedia("(max-width:780px)");


// it keeps on running during runtime
responsive(size);

size.addEventListener("change", responsive);

// SCROLL TO TOP
const hero = document.querySelector(".section-hero");
const footerSec = document.querySelector(".footerData");

const topbtn = document.createElement("div");
topbtn.classList.add("topbutton");
topbtn.classList.add("topbuttonShow");

topbtn.innerHTML = `<ion-icon name="chevron-up-outline" class="scroll-top"></ion-icon>`;

footerSec.after(topbtn);

const scrollToTop = () => {
    hero.scrollIntoView({ behavior: "smooth" });
}

topbtn.addEventListener("click", scrollToTop);

window.addEventListener('scroll', e => {
    topbtn.style.display = window.scrollY > 50 ? 'block' : 'none';
});

// LAZY IMAGES

const originalImg = document.querySelector("img[data-src]");

const lazy = (entries) => {
    const [image] = entries;
    if (!image.isIntersecting) return;

    image.target.src = originalImg.dataset.src;
}

const lazyImg = new IntersectionObserver(lazy, {
    root: null,
    threshold: 0,
});

lazyImg.observe(originalImg);
