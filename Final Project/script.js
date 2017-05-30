
$(document).ready(function(){
    $('.carousel').slick({
      // you'll ned to set arrows: true here
      // then you'll need to override some of the default styling that slick is putting on the page
      // I would specifically look at the left: *some num of px* property and the z-index (think big numbers)
      // to see if you can get them to show up
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
  // What default behavior did you forget to prevent here?
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

});