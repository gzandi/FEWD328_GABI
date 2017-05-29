
$(document).ready(function(){
    $('.carousel').slick({
      accessibility:true,
      cssEase:'ease',
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      swipe: true,
      draggable: true,
      swipeToSlide: true,
      useCss: true,
      useTransform: true,
      variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

});