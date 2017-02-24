(function(){

  angular
    .module('JobTrackerApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        // .state('login', {
        //   url: '/login',
        //   templateUrl: 'views/users/login.html',
        //   controller: 'AuthCtrl',
        //   onEnter: function(Auth, $state){
        //     Auth.currentUser().then(function(){
        //       $state.go('home')
        //     })
        //   }
        // })
        // .state('register', {
        //   url: '/register',
        //   templateUrl: 'views/users/register.html',
        //   controller: 'AuthCtrl',
        //   onEnter: function(Auth, $state){
        //     Auth.currentUser().then(function(){
        //       $state.go('home')
        //     })
        //   }
        // })
      $urlRouterProvider.otherwise('/')
    }]);



}())
