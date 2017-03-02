(function () {

  'use strict';

  angular
    .module('JobTrackerApp')
    .controller('UserController', ['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {
    var vm = this;

    vm.register = register;
    vm.login = login;

    function register() {
      Auth.register(vm.user).then(function(registeredUser) {
        $rootScope.user = registeredUser
        $state.go('jobs.list')
      })
      .catch(function(error) {
        alert(error);
      })
    }

    function login() {
      Auth.login(vm.user)
      .then(function(user) {
        $state.go('jobs.list')
      })
      .catch(function(error) {
        alert(error);
      })
    }
  }]);

}());
