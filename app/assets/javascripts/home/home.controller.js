(function() {

  'use strict';

    angular
      .module('JobTrackerApp')
      .controller('HomeController', HomeController);

      function HomeController(Auth, $rootScope, $state, $scope) {
          var vm = this;
          vm.logout = Auth.logout;
      }

}())
