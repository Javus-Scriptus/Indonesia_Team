$(function(){
    $('.section-3__slider').slick({
        prevArrow: '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">',
        nextArrow: '<img class="section3-slider__arrow slider__arrow-right" src="" alt="">',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3, 
        dots: true,
        responsive: [
          {
            breakpoint: 2100,
            settings:{
              prevArrow:  '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">',
              nextArrow: '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">' ,
              infinite: true,
              dots: true,
              prevArrow: false,
              nextArrow: false,
            }
          },
            {
              breakpoint: 1200,
              settings: {
                prevArrow:  '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">',
                nextArrow: '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">' ,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false,
              }
              
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 1,
                prevArrow:  '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">',
                nextArrow: '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">' ,
                dots: false,
                autoplay: true,
                infinite: true,
              }
            },
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 10,
                prevArrow:  '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">',
                nextArrow: '<img class="section3-slider__arrow slider__arrow-left" src="" alt="">' ,
                dots: false,
                autoplay: true,
                infinite: true,
              }
            }
          ]
    });
});
