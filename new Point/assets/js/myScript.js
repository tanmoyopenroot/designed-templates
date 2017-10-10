//Global Variables
var currentPage = ".page-1";
var nextPage = ".page-2";
var prevPage = ".page-4";
var currentId = "1";
var nextId = "2";
var prevId = "4";
var messFlag = 0;
var countTeam = 0;
//var i = 2;//pointer to next page's id
//var j = 5;//pointer to previous page's id
function scrollDown(currentPage, prevPage) {
    $(prevPage).addClass("animate-one");
    $(prevPage).css("display", "block");
    $(".filler-3").css("display", "block");
    $(".filler-4").css("display", "block");
    setTimeout(function () {
        $(".filler-3").addClass("animate");
        $(".filler-4").addClass("animate");
        $(prevPage).addClass("animate-page");
    }, 30);
    setTimeout(function () {
        $(currentPage).css("z-index", "0");
        $(prevPage).css("z-index", "1");
    }, 800);


    console.log("scrollDown test");
};

function scrollUp(currentPage, nextPage) {
    $(nextPage).addClass("animate");
    $(nextPage).css("display", "block");
    $(".filler-1").css("display", "block");
    $(".filler-2").css("display", "block");
    setTimeout(function () {
        $(".filler-1").addClass("animate-one");
        $(".filler-2").addClass("animate-one");
        $(nextPage).addClass("animate-page");
    }, 30);
    setTimeout(function () {
        $(currentPage).css("z-index", "0");
        $(nextPage).css("z-index", "1");
    }, 800);


    console.log("ScrollUP test");
};

function scrollUp_classRemove(currentPage, nextPage, currentId, nextId) {
    $("#" + nextId).addClass("active");
    $("#" + currentId).removeClass("active");
    $(currentPage).css("display", "none");
    $(".filler-1").css("display", "none");
    $(".filler-2").css("display", "none");
    //$(".filler-2").css("z-index", "2");
    //window.alert("nnn");
    $(nextPage).removeClass("animate-page");
    $(nextPage).removeClass("animate");
    $(".filler-1").removeClass("animate-one");
    $(".filler-2").removeClass("animate-one");




    console.log("ScrollUP Remove test");
}

function scrollDown_classRemove(currentPage, prevPage, currentId, prevId) {
    $("#" + prevId).addClass("active");
    $("#" + currentId).removeClass("active");
    $(currentPage).css("display", "none");
    $(".filler-3").css("display", "none");
    $(".filler-4").css("display", "none");
    //window.alert("nnn");
    $(prevPage).removeClass("animate-page");
    $(prevPage).removeClass("animate-one");
    $(".filler-3").removeClass("animate");
    $(".filler-4").removeClass("animate");




    console.log("scrollDown Remove test");
}

function page_Id_update() {
    nextId = parseInt(currentId) + 1;
    if (nextId == 5) {
        nextId = 1;
    }
    prevId = parseInt(currentId) - 1;
    if (prevId == 0) {
        prevId = 4;
    }
    prevPage = ".page-" + prevId;
    currentPage = ".page-" + currentId;
    nextPage = ".page-" + nextId;
}
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


    var scroller = 0;
    var timeout = 0;
    var lastscrollTop = 0;
    console.log("lst " + lastscrollTop);
    //
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".page").swipe({
            swipeDown: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (!($(".eventDescribe").hasClass("descBottom"))) {
                    timeout = setTimeout(function () {
                        //window.alert(" ffff");
                        if (scroller == 0) {
                            scroller = 1;
                            scrollDown(currentPage, prevPage);
                            setTimeout(function () {
                                scrollDown_classRemove(currentPage, prevPage, currentId, prevId);
                                currentId = prevId;
                                page_Id_update();
                                scroller = 0;
                            }, 1700);
                        }
                    }, 80);
                }
            }
            , swipeUp: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (!($(".eventDescribe").hasClass("descBottom"))) {
                    timeout = setTimeout(function () {
                        if (scroller == 0) {
                            scroller = 1;
                            scrollUp(currentPage, nextPage);
                            setTimeout(function () {
                                scrollUp_classRemove(currentPage, nextPage, currentId, nextId);
                                currentId = nextId;
                                page_Id_update();
                                scroller = 0;
                            }, 1700);
                        }
                    }, 80);
                }
            }
        });
    }
    else {
        $(".page").mousewheel(function (event) {
            //window.alert("hhh");
            var nowscrollTop = event.deltaFactor * event.deltaY;
            console.log("nst " + nowscrollTop);
            console.log("lst " + lastscrollTop);
            //console.log(nowscrollTop);
            //clearTimeout(timeout);
            if (!($(".eventDescribe").hasClass("descRight")) && !($(".eventDescribe").hasClass("descBottom"))) {
                timeout = setTimeout(function () {
                    if (nowscrollTop < lastscrollTop) {
                        //scroll up //clickedId > currentId
                        console.log("scroll up");
                        if (scroller == 0) {
                            scroller = 1;
                            scrollUp(currentPage, nextPage);
                            setTimeout(function () {
                                scrollUp_classRemove(currentPage, nextPage, currentId, nextId);
                                currentId = nextId;
                                page_Id_update();
                                scroller = 0;
                            }, 1700);
                        }
                    }
                    else {
                        //clickedId < currentId
                        console.log("scroll down");
                        if (scroller == 0) {
                            scroller = 1;
                            scrollDown(currentPage, prevPage);
                            setTimeout(function () {
                                scrollDown_classRemove(currentPage, prevPage, currentId, prevId);
                                currentId = prevId;
                                page_Id_update();
                                scroller = 0;
                            }, 1700);
                        }
                    }
                    lastscrollTop = 0;
                    //console.log("lst " + lastscrollTop);  
                }, 80);
            }
        }, {
            passive: true
        });
    }
});



$(window).scroll(function() {
    if($(window).scrollTop() > 350){
        $(".eventPage .eventLeft h1").css("color","#1c1d25");
        $(".teamPage .teamLeft h1").css("color","#1c1d25");
        $(".askPage .askLeft h1").css("color","#1c1d25");
        $(".sponsorPage .sponsorLeft h1").css("color","#1c1d25");
    }
    else{
        $(".eventPage .eventLeft h1").css("color","#fff");
        $(".teamPage .teamLeft h1").css("color","#fff");
        $(".askPage .askLeft h1").css("color","#fff");
        $(".sponsorPage .sponsorLeft h1").css("color","#fff");
    }
    
    if($(window).scrollTop() > 650){
        $(".eventPage .eventLeft h1").css("color","#1c1d25");
    }
    else{
        $(".eventPage .eventLeft h1").css("color","#fff");
    }    
})
