(function() {

  'use strict';

    function HomeController() {
        var vm = this;
        vm.name = "Karuna";
    }

    angular
      .module('JobTrackerApp')
      .controller('HomeController', HomeController);
}())
