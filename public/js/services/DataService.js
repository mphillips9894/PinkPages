//public/js/services/DataService.js
//This service stores data that needs to be persistent
angular.module('DataService', []).factory('Data', function(){
	//Right now, only need to store currently selected category
    var data = {curCat: ""};

    return{
        getCategory: function(){
        	return data.curCat;
        },
        setCategory: function(newCat){
        	data.curCat = newCat;
        }
    };
});
