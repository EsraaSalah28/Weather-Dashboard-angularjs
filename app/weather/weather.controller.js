(function(){
angular.module("app.weather")
.controller("Weather",function($scope,$routeParams,weatherSvc){


     $scope.current=null;
     $scope.getTime=getTime;
    if($routeParams.id !== undefined)
    {
     getCurrent($routeParams.id)

    }
    function getCurrent(id)
    {

        weatherSvc.getCurrent(id)
        .then(
            function(response)
            {
              $scope.current=response;
            },
            function(err)
            {
                console.log(err);
            }

        )
    }

    function getTime(dt)
    {
        return new Date(dt*1000);
    }
    
})

})()