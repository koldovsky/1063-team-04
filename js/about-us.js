const services = [
  {
    imageSvg: 'img/about-us/free-shipping.svg',
    title: "Free Shipping",
    text: "Free shipping on all orders.",
  },
  {
    imageSvg: 'img/about-us/10-day-returns.svg',
    title: "10-Day Returns",
    text: "Contact us for a return.",
  },
  {
    imageSvg: 'img/about-us/secure-payment.svg',
    title: "Secure Payment",
    text: "We accept Visa and MasterCard.",
  },
  {
    imageSvg: 'img/about-us/online-support.svg',
    title: "Online Support",
    text: "We are always here to help.",
  }
];

renderServices(services);

function renderServices(services){
    const servicesContainer = document.querySelector('.about-us__services-list');
    servicesContainer.innerHTML = '';
    for(const service of services) {
        servicesContainer.innerHTML += 
        `<article class="about-us__service-card">
          <div class="about-us__service-image-container">
            <img class="about-us__service-image" src="${service.imageSvg}" alt="${service.title}">
          </div>
          <div class="about-us__service-description">
              <h3 class="about-us__service-title">${service.title}</h3>
              <p class="about-us__service-text">${service.text}</p>
          </div>
 
        </article>`;
    }
}
