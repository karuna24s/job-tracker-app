(function () {

  'use strict';

  angular
    .module('JobTrackerApp')
    .controller('UserController', ['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {
    var vm = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

    vm.register = register;
    vm.login = login;

    function register() {
      Auth.register(vm.user, config).then(function(registeredUser) {
        $rootScope.user = registeredUser
        $state.go('jobs.list')
      })
      .catch(function(error) {
        alert(error);
      })
    }

    function login() {
      Auth.login(vm.user, config)
      .then(function(user) {
        $state.go('jobs.list')
      })
      .catch(function(error) {
        alert(error);
      })
    }
  }]);

}());
