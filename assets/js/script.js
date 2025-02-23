const elements = document.querySelectorAll(".hidden");

elements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.remove("hidden");
    element.classList.add("animate__animated", "animate__fadeInLeft");
  }, index * 300);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate__fadeInUp");
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }, index * 200);
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});