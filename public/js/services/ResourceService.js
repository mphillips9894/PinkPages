//public/js/services/ResourceService.js
angular.module('ResourceService', []).factory('Resource', ['$http', function($http){
    return{
        //call to get resources by category
        //will respond to a category name, or "all"
        get: function(cat){
            return $http.get('/api' + cat);
        }
    };
}]);
