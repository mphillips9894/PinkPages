// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', 'Category', 'Data', function ($scope, Category, Data) {
        //initialize variables that will be needed
    	$scope.cats={};
    	//console.log("New main controller initialized");    //Used for debugging

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
