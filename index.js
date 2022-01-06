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

