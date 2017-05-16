$(document).ready(function(){
    $("#cityzip").submit(function(event){
      event.preventDefault();
      var city = $("#cityzip").children().val();
      console.log(city);

      var url = "http://api.openweathermap.org/data/2.5/weather?zip="
      var apikey=",us&appid=9d34ff3242ce2f3c92bb9e2810a039bc"

      $.ajax({
        method: "GET",
        url: url + city +apikey,
        dataType: "jsonp",
        success: function(json) {
          console.log(json);
        }
      });
    });
})


