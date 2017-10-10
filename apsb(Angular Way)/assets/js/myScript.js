jQuery(document).ready(function () {
    
//    Navigation
    $(".navBtn").bind("click",function(){
        console.log("Inside Nav BTN");
        if($("#navigationBar").height()){
            $("#navigationBar .list-unstyled .animated").each(function(){
               $(this).removeClass("fadeIn")
                   .addClass("fadeOut");
            });            
            setTimeout(function(){
                $("#navigationBar .list-unstyled").css({display:"none"}); 
                $("#navigationBar").css({width:"0px"})
                    .css({height:"0px"})
                    .css({opacity:"0"});                
            },1400);            
        }
        else{           
            $("#navigationBar").css({width:"800px"})         
                    .css({height:"800px"})          
                    .css({opacity:"1"});
            $("#navigationBar .list-unstyled .animated").each(function(){
               $(this).removeClass("fadeOut").addClass("fadeIn");
            });
            setTimeout(function(){
                $("#navigationBar .list-unstyled").css({display:"block"});     
            },200);                   
        }
    });
    
    
////    Box Conatiner
//    if($(window).width() > 1200){
//        $("article:even").css("flex-direction", "row");
//        $("article:odd").css("flex-direction", "row-reverse");
//    }else{
//        $("article:even").css("flex-direction", "column");
//        $("article:odd").css("flex-direction", "column-reverse");        
//    }
});

//    Box Conatiner
    if($(window).width() > 1200){
        $("article:even").css("flex-direction", "row");
        $("article:odd").css("flex-direction", "row-reverse");
    }else{
        $("article:even").css("flex-direction", "column");
        $("article:odd").css("flex-direction", "column-reverse");        
    }