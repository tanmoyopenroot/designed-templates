var apsbApp = angular.module("apsbApp",["ngSanitize","ngRoute"]);

apsbApp.config(['$routeProvider',
    function($routeProvider){
//        console.log($routeProvider);
        $routeProvider
        .when('/home',{
            controller:'homePage',
            templateUrl:'assets/components/view/home.html'
        })
        .when('/activities',{
            controller:'actPage',
            templateUrl:'assets/components/view/activity.html'
        })
        .when('/knowledge',{
            controller:'knowPage',
            templateUrl:'assets/components/view/knowledge.html'
        })
        .when('/network',{
            controller:'netPage',
            templateUrl:'assets/components/view/network.html'
        })        
        .otherwise({
            redirectTo: '/home'
        });
    }
])


//Directive    
apsbApp.directive('containerBox', function(){ 
    return { 
        restrict: 'A', 
        replace: true, 
        scope: { 
            data: '='
        }, 
        template: '<div class="imgBoxContainer"><div class="imgBoxHolder"><div ng-bind-html="data.imgScr"></div></div><div class="imgBoxDetail"><h3>{{data.head}}</h3></br></br><h5 class="light blue textLeft">{{data.subInfo}}</h5> </div></div>'
    }
}) 
    
//HomePage Controller
apsbApp.controller("homePage",function($scope){   
//Recent News    
    $scope.recentNews = [
        {
            date: '<h2 class="light  blue">1st Jan 2016</h2>',
            newsInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        },
        {
            date: '<h2 class="light  blue">1st Jan 2016</h2>',
            newsInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        },
        {
            date: '<h2 class="light  blue">1st Jan 2016</h2>',
            newsInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        }, 
        {
            date: '<h2 class="light  blue">1st Jan 2016</h2>',
            newsInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        }        
    ]
//Recent Act
    $scope.recentAct = [
        {
            date: '<h2 class="light  green">1st Jan 2016</h2>',
            actInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        },
        {
            date: '<h2 class="light  green">1st Jan 2016</h2>',
            actInfo: '<h5 class="light">Children Help Companies</h5>',
            more: '<a class="light learn">Learn More</a>'
        }         
    ]
//    Home Information
    $scope.homeInfo = [
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        }        
    ]


    $scope.testInfo = [
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        }        
    ]    

})


//Activity Page
apsbApp.controller("actPage",function($scope){ 
    $scope.actInfo = [
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        }        
    ]
})





//Knowledge Page
apsbApp.controller("knowPage",function($scope){ 
    $scope.knowInfo = [
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        }        
    ]
})




//Network Page
apsbApp.controller("netPage",function($scope){ 
    $scope.netInfo = [
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        },
        {
            imgScr: '<img src="assets/image/cards/card1.jpg" class="img-responsive" />',
            head: 'Name',
            subInfo: 'SomeText / APSB'
        }        
    ]
})

