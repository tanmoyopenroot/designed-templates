var cruApp = angular.module("cruApp",["ngRoute"]);

cruApp.config(['$routeProvider',
    function($routeProvider){
//        console.log($routeProvider);
        $routeProvider
        .when('/search',{
            controller:'searchPage',
            templateUrl:'assets/components/view/search.html'
        })
        .when('/register',{
            controller:'registerPage',
            templateUrl:'assets/components/view/register.html'
        })
        .when('/modify',{
            controller:'modifyPage',
            templateUrl:'assets/components/view/modify.html'
        })     
        .otherwise({
            redirectTo: '/search'
        });
    }
])

//Navigation Bar
//cruApp.controller("navigationBar",function($scope){
//    $scope.index = 0;
//    
//    $scope.setIndex = function(val){
//        $scope.index = val;
//    }
//    
//    $scope.getIndex = function(){
//        return $scope.index;
//    }
//})

//Search Page
cruApp.controller("searchPage",function($scope,$http){     
    function getData(){
        $http.get('assets/data/data.json')
        .success(function(data){
            console.log("Http Request Success");
            $scope.personInfo = data;
        })
        .error(function(){
            console.log("Http Request Failed");          
        });
    }
    getData();
})


//Register Page
cruApp.controller("registerPage",function($scope, $http){
//    var personDtl = {
//        date: $scope.date,
//        name: $scope.name,
//        address: $scope.address,            
//        age: $scope.age,
//        fileNo: $scope.fileNo,
//        registerNo: $scope.registerNo         
//    };
    $scope.onSubmit = function(){
        console.log("Inside OnSubmit");
        $http.post('assets/data/data.json', JSON.stringify($scope.person)).then(function(response){
            if(response.$scope.person)
                console.log("Submit Success");
            else
                console.log("Submit Failed");
        });
        
        $scope.msgAngular = angular.toJson($scope.person);
        $scope.msgJson = JSON.stringify($scope.person);
    };
    
//    var person = {};
//    person = $scope.person;
//    $scope.onSubmit = function(){
//        console.log(person.name);
//    }
    
    
    
    console.log("Inside Register Page");
    
})

