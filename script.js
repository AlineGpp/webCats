function menuOnClick() {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("open");
}

function getValue(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  alert("O nome do seu gato é: " + nome);
  const addnameInList = document.getElementById("addnameInList");
  const li = document.createElement("li");
  li.appendChild = nome;
  addnameInList.appendChild(li);
}

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  mapProducts();
});

let produtosSwiper;

function mapProducts() {
  fetch("produtos.json")
    .then((response) => response.json())
    .then((data) => {
      const swiperWrapper = document.querySelector(
        "#produtos-swiper .swiper-wrapper"
      );
      swiperWrapper.innerHTML = "";

      data.produtos.forEach((product) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
      <div class="produto">
        <h3>${product.titulo}</h3>
        <img src="${product.imagem}" alt="${product.titulo}" width="256" height="256" class="img-produto">
        <button class="btn-produto">
          <a href="${product.link}" target="_blank">Ver Produto</a>
        </button>
      </div>
    `;
        swiperWrapper.appendChild(slide);
      });

      if (produtosSwiper) {
        produtosSwiper.update();
      } else {
        produtosSwiper = new Swiper("#produtos-swiper", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          },
        });
      }
    })

    .catch((error) => console.error("Erro ao carregar produtos:", error));
}
