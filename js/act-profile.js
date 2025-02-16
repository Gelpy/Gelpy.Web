const fixedBox = document.querySelector('#dataBox')
const sticky = fixedBox.offsetTop

window.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky){
    fixedBox.classList.add('sticky');
  } else {
    fixedBox.classList.remove('sticky');
  }
})

$(document).ready(function(){
  $('.photos').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    adaptiveHeight: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});