// moduleをインポート
import './controllers/controllers.module.ts';
import './services/services.module.ts';

import runBlock from './app.run';
import appConfig from './app.config';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .run(runBlock)
    .config(appConfig);
