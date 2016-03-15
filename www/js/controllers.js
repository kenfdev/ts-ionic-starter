/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	angular.module('starter.controllers', [])
	    .controller('DashCtrl', function ($scope) { })
	    .controller('ChatsCtrl', function ($scope, Chats) {
	    // With the new view caching in Ionic, Controllers are only called
	    // when they are recreated or on app start, instead of every page change.
	    // To listen for when this page is active (for example, to refresh data),
	    // listen for the $ionicView.enter event:
	    //
	    //$scope.$on('$ionicView.enter', function(e) {
	    //});
	    $scope.chats = Chats.all();
	    $scope.remove = function (chat) {
	        Chats.remove(chat);
	    };
	})
	    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	    $scope.chat = Chats.get($stateParams.chatId);
	})
	    .controller('AccountCtrl', function ($scope) {
	    $scope.settings = {
	        enableFriends: true
	    };
	});


/***/ }
/******/ ]);