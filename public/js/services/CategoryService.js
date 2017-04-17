//public/js/services/CategoryService.js
angular.module('CategoryService', []).factory('Category', ['$http', function($http){
    return{
        //call to get all categories
        get: function(){
            return $http.get('/api');
        }
    };
}]);
