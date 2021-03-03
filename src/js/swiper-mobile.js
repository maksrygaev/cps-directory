export { mobileSwiper };
const slider = document.querySelectorAll('.swiper-container');
let widthPage = 100;

function mobileSwiper() {
    window.addEventListener('resize', function() {
        widthPage = window.innerWidth;
    });
    if (widthPage <= 767) {
        for (let i = 0; i < slider.length; i++) {
            new Swiper(slider[i], {
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                mousewheel: {
                    sensitivity: 1,
                }
            });
        }
    } else {
        slider[i].destroy();
    }
}