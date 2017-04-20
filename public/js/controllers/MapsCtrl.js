// public/js/controllers/MapsCtrl.js
angular.module('MapsCtrl', [])
    .controller('MapsController', ['$scope', 'Data', function ($scope, Data) {
    	//blank to initialize, to make sure something is there
    	$scope.cat = "";

    	//function to return html message, probably only to be used for debugging (in this form)
    	$scope.getCatMessage = function(){
    		if ($scope.cat === "") return "No category is selected.";
    		return "The selected category is " + $scope.cat + ".";
    	}

        //moniter the selected category for changes and update if necessary
        $scope.$watch(function(){
        	return Data.getCategory();
        }, function(newValue, oldValue){
        	//console.log("category changed from " + oldValue + " to " + newValue);    //debugging
            $scope.cat = newValue;
        });
    }]);
