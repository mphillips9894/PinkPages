//public/js/services/DataService.js
//This service stores data that needs to be persistent
angular.module('DataService', []).factory('Data', function(){
    var data = {
        curCat: "",
        mapsReady: false
    };

    return{
        getCategory: function(){
        	return data.curCat;
        },
        setCategory: function(newCat){
        	data.curCat = newCat;
        },

        getMapsReady: function(){
            return data.mapsReady;
        },
        setMapsReady: function(){
            data.mapsReady = true;
        }
    };
});
