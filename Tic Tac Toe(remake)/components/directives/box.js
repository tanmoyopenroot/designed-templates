var gameApp=angular.module("gameApp",[]);

gameApp.directive("crossContainer",function(){
   var directive={};
    
    directive.restrict="E";
    directive.template="<h1>Hello</h1>";
    
    return directive;
});