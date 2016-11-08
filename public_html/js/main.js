$(document).ready(function(){
   $('#maini').addClass('animate');
   $(window).scroll(function(){
       var y = $(this).scrollTop();
       
       if(y >= 200){
           $('#laptop').addClass('animate');
           $('#movilex').addClass('animate');
           $('#maini').removeClass('animate');
       }
       
       if(y < 200){
           $('#laptop').removeClass('animate');
           $('#movilex').removeClass('animate');
           $('#maini').addClass('animate');
       }
   }) 
    
});


