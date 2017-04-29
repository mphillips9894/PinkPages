// public/js/controllers/MapsCtrl.js
angular.module('MapsCtrl', [])
    .controller('MapsController', ['$scope', 'Data', 'Resource', function ($scope, Data, Resource) {
    	//blank to initialize, to make sure something is there
    	$scope.cat = "";
    	$scope.resources = [];

    	//returns a message detailing which resources are selected
    	$scope.getCatMessage = function(){
    		if ($scope.cat === "") return "All Places";
    		return $scope.cat;
    	}

    	//callback functions for querying resources, defined here for convenienve
    	var callback = function(list){
    		$scope.resources = list.data;
    		console.log($scope.resources);  //debugging
    	};
    	var cberr = function(err){
    		console.error(err);
    	};

        //moniter the selected category for changes and update resources
        $scope.$watch(function(){
        	return Data.getCategory();
        }, function(newValue, oldValue){
            $scope.cat = newValue;
            if($scope.cat==="") Resource.get("all").then(callback, cberr);
            else Resource.get($scope.cat).then(callback, cberr);
        });
    }]);
