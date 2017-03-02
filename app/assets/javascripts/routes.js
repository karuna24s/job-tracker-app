(function(){

  angular
    .module('JobTrackerApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('jobs', {
        url: "/",
        abstract: true,
        template: '<ui-view />',
        controller: ['$rootScope', '$state', function ($rootScope, $state) {
          $rootScope.$on('$stateChangeStart', function (event, toState, toParams, $rootScope) {
            var requireAuth = toState.data.requireAuth;
            if (requireAuth && typeof event.currentScope.user === 'undefined') {
              event.preventDefault();
              $state.go('jobs.login');
            }
          });
          $rootScope.$on('devise:logout', function(event, oldCurrentUser) {
            $state.go('jobs.home');
          });
        }]
      })
      .state('jobs.home', {
        url: "home",
        templateUrl: 'views/common/home.html',
        data: {
          requireAuth: false
        }
      })
      .state('jobs.list', {
        url: "list",
        templateUrl: 'views/jobs/index.html',
        controller: 'JobController as vm',
        data: {
          requireAuth: true
        }
      })
      .state('jobs.show', {
        url: "view/:id",
        templateUrl: 'views/jobs/show.html',
        data: {
          requireAuth: true
        }
      })
      .state('jobs.show.checklist', {
        url: "/checklists",
        templateUrl: 'views/checklists/show.html',
        controller: 'ChecklistController as vm',
        data: {
          requireAuth: true
        }
      })
      .state('jobs.new', {
        url: "new",
        templateUrl: 'views/jobs/new.html',
        controller: 'JobController as vm',
        data: {
          requireAuth: true
        }
      })
      .state('jobs.edit', {
        url: "view/:id/edit",
        templateUrl: 'views/jobs/edit.html',
        controller: 'JobController as vm',
        data: {
          requireAuth: true
        }
      })
      .state('jobs.register', {
        url: "register",
        templateUrl: 'views/users/register.html',
        controller: 'UserController as vm',
        data: {
          requireAuth: false
        }
      })
      .state('jobs.login', {
        url: "login",
        templateUrl: 'views/users/login.html',
        controller: 'UserController as vm',
        data: {
          requireAuth: false
        }
      })
      $urlRouterProvider.otherwise('/home')
    }]);



}())
