function offNav(){
    $(".shitLeft").css({width:"0px"});
    $(".closeNav").css({visibility:"hidden"});
    $(".shitLeft>li").css({visibility:"hidden"});
    $(".shitLeft>li").css({transitionDelay:"0s"});
    
}

function onNav(){
    $(".shitLeft").css({width:"100%"});
    $(".closeNav").css({visibility:"visible"});
    $(".shitLeft>li").css({visibility:"visible"});
    $(".shitLeft>li").css({transitionDelay:"0.4s"});
    
}