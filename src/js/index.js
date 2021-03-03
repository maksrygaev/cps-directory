import '../scss/style.scss';
import { buttonsMore } from './more.js';
import { sidebarShow } from './sidebar.js';
import { feedback } from './feedback.js';
import { mobileswioer, mobileSwiper } from './swiper-mobile.js';

function startApp() {
    buttonsMore();
    sidebarShow();
    feedback();
    mobileSwiper();
}

startApp();