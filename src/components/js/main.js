$(function(){
    $('.section-3__slider').slick({
        prevArrow: '<img class="section3-slider__arrow slider__arrow-left" src="../img/section3/arrow-left.svg" alt="">',
        nextArrow: '<img class="section3-slider__arrow slider__arrow-right" src="../img/section3/arrow-right.svg" alt="">',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3, 
        dots: true,
    });
});
