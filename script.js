function menuOnClick() {
    const nav = document.querySelector('.menu');
    nav.classList.toggle('open');
}


function getValue(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    alert('O nome do seu gato é: ' + nome);
    const addnameInList = document.getElementById('addnameInList');
    const li = document.createElement('li');
    li.appendChild = nome;
    addnameInList.appendChild(li);
   
}


// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.swiper-pagination'
//   },
//   mousewheel: true,
//   keyboard: true,
//   breakpoints: {
//     767: {
//       slidesPerView: 2,
//       setWrapperSize: true
//     }
//   }
// })

const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
    }
  }
});