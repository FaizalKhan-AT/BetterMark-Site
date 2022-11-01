const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  progress: {
    el: ".swiper-progressbar",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
const img = [
  { val: "./Assets/images/orange.png", size: "500" },
  { val: "./Assets/images/cap.png", size: "645" },
];
const imgTag = document.getElementById("main-img");
const offeringCards = document.getElementById("offering-cards");
const b2bOffers = document.getElementById("b2b-offer");
const retailShop = document.getElementById("retail-shop");
import { offerings, b2b, retail } from "./data.js";

setInterval(() => {
  let { val, size } = img[Math.floor(Math.random() * img.length)];
  imgTag.src = val;
  imgTag.width = size;
}, 2000);

const renderOfferings = () => {
  const html = offerings
    .map(({ img, title, subTitle }, idx) => {
      return `
      <div
        class="col-md-8 ${
          "offer-card-" + (idx + 1)
        } card d-flex flex-row justify-content-center gap-3 align-items-center"
      >
        <img src=${img} width="190"/>
        <div class="d-flex flex-column justify-content-start">
          <h3>${title}</h3>
          <p>${subTitle}</p>
        </div>
      </div>
    `;
    })
    .join("");
  offeringCards.innerHTML = html;
};

const renderb2b = () => {
  const html = b2b
    .map(({ img, text, tilte }) => {
      return `
      <div
      class="col-md-8 card d-flex flex-row justify-content-center gap-4 align-items-center"
    >
        <span
          style="font-size: 4em"
          class="material-symbols-outlined"
        >
          ${img}
        </span>
        <div class="d-flex flex-column justify-content-start">
          <h3 style="width:fit-content" class="underline">${tilte}</h3>
          <p>
           ${text}
          </p>
        </div>
      </div>

    `;
    })
    .join("");
  b2bOffers.innerHTML = html;
};
const renderRetail = () => {
  const html = retail
    .map((img, idx) => {
      return `
      <div class="col-md-3 ${idx === 0 ? "ms-5" : ""} card retail py-3 px-2">
        <img src=${img} width="150"/>
      </div>
    `;
    })
    .join("");
  retailShop.innerHTML =
    html +
    `<br/><a class="mt-4 btn btn-shop py-2 col-md-4" href="https://bmminimart.com/" target="_blank"><div >Shop now </div></a>`;
};
renderRetail();
renderb2b();
renderOfferings();
