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

	angular.module('starter.services', [])
	    .factory('Chats', function () {
	    // Might use a resource here that returns a JSON array
	    // Some fake testing data
	    var chats = [{
	            id: 0,
	            name: 'Ben Sparrow',
	            lastText: 'You on your way?',
	            face: 'img/ben.png'
	        }, {
	            id: 1,
	            name: 'Max Lynx',
	            lastText: 'Hey, it\'s me',
	            face: 'img/max.png'
	        }, {
	            id: 2,
	            name: 'Adam Bradleyson',
	            lastText: 'I should buy a boat',
	            face: 'img/adam.jpg'
	        }, {
	            id: 3,
	            name: 'Perry Governor',
	            lastText: 'Look at my mukluks!',
	            face: 'img/perry.png'
	        }, {
	            id: 4,
	            name: 'Mike Harrington',
	            lastText: 'This is wicked good ice cream.',
	            face: 'img/mike.png'
	        }];
	    return {
	        all: function () {
	            return chats;
	        },
	        remove: function (chat) {
	            chats.splice(chats.indexOf(chat), 1);
	        },
	        get: function (chatId) {
	            for (var i = 0; i < chats.length; i++) {
	                if (chats[i].id === parseInt(chatId)) {
	                    return chats[i];
	                }
	            }
	            return null;
	        }
	    };
	});


/***/ }
/******/ ]);