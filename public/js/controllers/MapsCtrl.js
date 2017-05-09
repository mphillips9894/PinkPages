// public/js/controllers/MapsCtrl.js
angular.module('MapsCtrl', [])
    .controller('MapsController', ['$scope', 'Data', 'Resource', function ($scope, Data, Resource) {
    	//$scope variables that will be used
    	$scope.cat = "";
    	$scope.resources = [];
    	$scope.markers = [];
    	$scope.map = null;

    	//returns a message detailing which resources are selected
    	$scope.getCatMessage = function(){
    		if ($scope.cat === "") return "All Places";
    		return $scope.cat;
    	};

    	//function to remove existing markers on map and make new ones
    	//map and resources in the $scope must be initialized
    	$scope.refreshMarkers = function(){
    		//remove existing markers
    		for(var i=0, l=$scope.markers.length; i<l; i++){
                $scope.markers[i].setMap(null);
    		}//end for loop
            $scope.markers = [];
            
            for(var i=0, l=$scope.resources.length; i<l; i++){
                var marker = new google.maps.Marker({
                    position: $scope.resources[i].latlng,
                    title: $scope.resources[i].name,
                    map: $scope.map
                });
                $scope.markers.push(marker);
            }//end for loop
    	};

    	//callback functions for querying resources, defined here for convenienve
    	var callback = function(list){
    		$scope.resources = list.data;
    		console.log($scope.resources);  //debugging
    		$scope.refreshMarkers();
    	};
    	var cberr = function(err){
    		console.error(err);
    	};

    	//wait until the Maps API is loaded, then create the map
    	$scope.$watch(function(){
    		return Data.getMapsReady();
    	}, function(newValue, oldValue){
    		if(newValue === true){
	            $scope.map = new google.maps.Map(document.getElementById('map'), {
	    		    zoom: 17,
	    		    center: {lat: 40.437417, lng: -79.997923}
	    	    });
    		}
    		$scope.refreshMarkers();
    	});
    	

        //moniter the selected category for changes and update resources
        $scope.$watch(function(){
        	return Data.getCategory();
        }, function(newValue, oldValue){
            $scope.cat = newValue;
            if($scope.cat==="") Resource.get("all").then(callback, cberr);
            else Resource.get($scope.cat).then(callback, cberr);

        });
    }]);
