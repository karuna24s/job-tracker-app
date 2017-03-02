angular
  .module('JobTrackerApp')
  .directive('navBar', function NavBar(){
    return {
      templateUrl: 'views/common/nav.html',
      controller: 'NavController'
    }
})
