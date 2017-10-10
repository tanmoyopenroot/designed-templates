jQuery(document).ready(function () {

    // Tanmoy
    setTimeout(function(){    
        $(".loadContainer").css({display:"none"}); 
    },2000);                 
    
    $(".navBtn").bind("click",function(){                   
            $("#navigationBar .animated").each(function(){
               $(this).removeClass("fadeOut").addClass("fadeIn");
            });
            setTimeout(function(){
                $("#navigationBar").css({display:"block"});     
            },200);      
    });   
    
    
    $(".closeBtn").bind("click",function(){          
        
        
            $("#navigationBar .animated").each(function(){
               $(this).removeClass("fadeIn")
                   .addClass("fadeOut");
            });            
            setTimeout(function(){
                $("#navigationBar").css({display:"none"});              
            },1400); 

    }); 
    
    $('.carousel').carousel();    
});