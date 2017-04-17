// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController', ['$scope', 'Category', function ($scope, Category) {
        $scope.cats={};
        Category.get().then(function(cats){
            $scope.cats = cats.data;
            console.log(cats.data);
        }, function(err){
        	console.error(err);
        });
    }]);
