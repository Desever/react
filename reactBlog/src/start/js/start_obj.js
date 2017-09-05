
//swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

//当前页面
var startObj={

    "startSwiper":function(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            }
        });
    }

}

export default startObj;