'use strict';

//data service, manages data modle throughout the life cycle of the application

angular.module('myApp.services', []).factory('dataService' function(){
	var exports = {};

	exports.data = ["x", "y"];

	return exports;
});
