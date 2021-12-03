var globalEl=document.getElementById("global");
var countUp=function(){
 //var appendNb=floor(random(5,7));
      var currentglb=parseFloat(globalEl.textContent);
              globalEl.textContent=currentglb+(Math.floor(Math.random() * 3) + 6) ;};
          
           window.setInterval(countUp,1000);

var usa=document.getElementById("usa");
var countItUp=function(){             
usa.textContent=parseFloat(usa.textContent)+(Math.floor(Math.random() * 1.6) + 1) ;};  
          window.setInterval(countItUp,1000);

 var caNb=document.getElementById("caNb");
 var countCanaUp=function(){                 
                 
           caNb.textContent=parseFloat(caNb.textContent)+(Math.floor(Math.random() * 2) + 3) ;};
  
            window.setInterval(countCanaUp,37500);

$(window).load(function(){

var body = $("body"),
    universe = $("#universe"),
    solarsys = $("#solar-system");

var init = function() {
 
    $(this).removeClass('hide-UI').addClass("set-speed");
    $(this).dequeue();
    $(".infos").text(" ");
  
};

var setView = function(view) { universe.removeClass().addClass(view); };

$("#toggle-data").click(function(e) {
  body.toggleClass("data-open data-close");
  e.preventDefault();
});

$("#toggle-controls").click(function(e) {
  body.toggleClass("controls-open controls-close");
  e.preventDefault();
});

$("#data a").click(function(e) {
  var ref = $(this).attr("class");
  solarsys.removeClass().addClass(ref);
  $(this).parent().find('a').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});


$(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
$(".set-speed").click(function() { setView("scale-stretched set-speed"); });
$(".set-size").click(function() { setView("scale-s set-size"); });


});
init();