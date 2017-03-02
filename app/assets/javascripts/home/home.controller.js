(function(){

   'use strict';

   angular
       .module('JobTrackerApp')
       .controller('HomeController', HomeController)


   function HomeController() {

       var vm = this;

       //callable methods on the vm
       vm.test = "Let's see if this shows!";

       //instantiated info
       activate();

       //defined methods on the vm
       function activate() {

       };

   };


 }());
