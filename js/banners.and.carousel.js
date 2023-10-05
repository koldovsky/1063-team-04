// const slides = [
//     '<div class="carousel_card">' +
//     '<img class="img__card" src="img/banners.and.carousel/applaws.png" alt="Applaws">' +

const slides = [
        '<div class="carousel_card">' +
        '<img class="img__card" src="img/banners.and.carousel/applaws.png" alt="Applaws">' +
        '</div>',
        '<div class="carousel_card">' +
        '<img class="img__card" src="img/banners.and.carousel/dokas.png" alt="Dokas">' +
        '</div>',
        '<div class="carousel_card">' +
        '<img class="img__card" src="img/banners.and.carousel/felix.png" alt="Felix">' +
        '</div>',
        '<div class="carousel_card">' +
        '<img class="img__card" src="img/banners.and.carousel/gourmet.png" alt="Gourmet">' +
        '</div>',
        '<div class="carousel_card">' +
        ' <img class="img__card" src="img/banners.and.carousel/purizon.png" alt="Purizon">' +
        '</div>',
        '<div class="carousel_card">' +
        '<img class="img__card" src="img/banners.and.carousel/rocco.png" alt="Rocco">' +
        '</div>',
        '<div class="carousel_card">' +
        ' <img class="img__card" src="img/banners.and.carousel/tigerino.png" alt="Tigerino">' +
        '</div>',
        
      ];
      
      let currentSlide = 0;
    
    const slideContainer = document.querySelector('.products__carousel-slide');
    
    function renderSlide() {
        slideContainer.innerHTML = '';
    
        if (window.matchMedia('(max-width: 478px)').matches) {
            // Додати одну карточку при ширині екрану менше 479px
            const index = currentSlide >= slides.length ? currentSlide - slides.length : currentSlide;
            slideContainer.innerHTML = slides[index];
        } else if (window.matchMedia('(max-width: 767px)').matches) {
            // Додати дві карточки при ширині екрану від 479px до 768px включно
            for (let i = currentSlide; i < currentSlide + 2; i++) {
                const index = i >= slides.length ? i - slides.length : i;
                slideContainer.innerHTML += slides[index];
            }
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
            // Додати три карточки при ширині екрану від 768px до 1023px включно
            for (let i = currentSlide; i < currentSlide + 3; i++) {
                const index = i >= slides.length ? i - slides.length : i;
                slideContainer.innerHTML += slides[index];
            }
        } else {
            // Додати шість карточок при ширині екрану більше 1023px
            for (let i = currentSlide; i < currentSlide + 6; i++) {
                const index = i >= slides.length ? i - slides.length : i;
                slideContainer.innerHTML += slides[index];
            }
        }
    }
        
    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlide();
    }
    
    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlide();
    }
    
    renderSlide();
    
    const nextButton = document.querySelector('.carousel__button-next');
    nextButton.addEventListener('click', nextSlide);
    
    const prevButton = document.querySelector('.carousel__button-prev');
    prevButton.addEventListener('click', prevSlide);
    
    window.addEventListener('resize', renderSlide);
    
