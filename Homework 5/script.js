$(document).ready(function(){ //page has been loaded
  
  $(".button").click(function(event){ //prevents an action, in this case a form submission
      event.preventDefault();
      alert("Sorry! We cannot accept forms at this time.");
    });

  $(".hide").hide(); //Hides everything on load (both see more and learn more text and ctas)

  $(".readmore").click(function(){ //opens read more text w/ readless cta
    $("#show-this-on-click").show(); //question on this, can I combine these two lines (11 and 12)?
    $(".readless").show();
    $(".readmore").hide();
  });  

    $(".readless").click(function(){ //closes extra text and brings back readmore cta
    $("#show-this-on-click").hide();
    $(".readless").hide();
    $(".readmore").show();
  });

  $(".learnmore").click(function(){ //opens learn more text 
    $("#learnmoretext").show();
    $(".learnmore").hide();
  });
//question: how do I maintain scroll position? 
});

