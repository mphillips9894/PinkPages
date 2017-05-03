// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', '$window', 'Category', 'Data', function ($scope, $window, Category, Data) {
        //initialize variables that will be needed
    	$scope.cats={};
    	//console.log("New main controller initialized");    //Used for debugging

    	//assign function to window for callback from Google Maps async loading
    	$window.mapsReady = function(){
    		Data.setMapsReady();
    	};

    	//now load Google Maps from here to ensure the callback function exists (do it only if it isn't loaded)
    	if(!Data.getMapsReady()){
	    	var mapScript = document.createElement('script');
	    	mapScript.setAttribute('async', '');
	    	mapScript.setAttribute('defer', '');
	    	mapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAhykCKZ1VG30WWiP06Sdp_cAyfIXZJvy0&callback=mapsReady');
	    	document.body.appendChild(mapScript);
        }

        //function to get list of categories from Category service
        Category.get().then(function(cats){
            $scope.cats = cats.data;
            //console.log(cats.data);    //Useful for debugging
        }, function(err){
        	console.error(err);
        });

        //this function will be invoked to set the category in the Data
        //service to reflect the category that has been selected
        //It should take a string as an argument.
        $scope.setCat = function(cat){
            Data.setCategory(cat);
            console.log("set category to " + Data.getCategory());    //Useful for debugging
        };
    }]);
