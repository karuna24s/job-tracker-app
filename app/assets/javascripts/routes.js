(function(){

   'use strict';

   angular
       .module('JobTrackerApp')
       .config(function($stateProvider, $urlRouterProvider){
           $stateProvider
               .state('home', {
                 url: '/',
                 templateUrl: 'home/home.html',
                 controller: 'HomeController as home'
               });
               $urlRouterProvider
                   .otherwise('/');
     });

 }());
