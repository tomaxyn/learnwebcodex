$(document).ready(main);

   var contador = 1;
   
   function main(){
       $('.menu-bar span').click(function(){
          //$('nav').toggle(); 
          if(contador == 1){
              $('nav').animate({
                 left: '0'                  
              });
              contador = 0;
               $('section').animate({
                 right: '-100%'                  
              });
              contador = 0;
          }else{
              $('nav').animate({
                 left: '-100%' 
              });
              $('section').animate({
                 right: '0' 
              });
              contador = 1;
          }
       });
   
};

