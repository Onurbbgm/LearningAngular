app.run(function($rootScope) {
    $rootScope.color = 'blue';
});
app.controller("myCtrl", function($scope, $timeout, $http){
    /*$http.get("welcome.html").then(function (response){
        $scope.myWelcome = response.data;
    });*/
    $scope.myHeader = "Say What Motherfucker! Say one more time!";
    $timeout(function (){
        $scope.myHeader = "I dare you, I double dare you!";
    }, 5000);
    $scope.options = [{toDo:"What", response:"Shot in the leg"}, {toDo: "Quiet", response:"Shot in the leg, smart ass!"}];    
    $scope.firstName = "Jules";
    $scope.lastName = "Doe";
    $scope.color = 'red';
    $scope.names = [
        {name:'Vince',country:'Netherlands'},
        {name:'Buck',country:'Sweden'},
        {name:'Wallace',country:'Denmark'},
        {name:'Buch',country:'Norway'}
    ];
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    $http.get("https://raw.githubusercontent.com/Onurbbgm/LearningAngular/master/characters.php").then(function(response) {        
        $scope.myData = response.data.records;
    }, function(response) {        
        $scope.myData = "Something went wrong";
    });
    $scope.myFunction = function(){
        $scope.showMe = !$scope.showMe;
    };
});

app.directive("test", function() {
    return {
        template : "<h1>Say What Motherfucker!</h1>"
    };
});