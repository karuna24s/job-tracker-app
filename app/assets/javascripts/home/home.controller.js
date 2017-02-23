(function() {


  'use strict'

  angular
    .module('JobTrackerApp')
    .controller('HomeController', HomeController)

    function HomeController() {
      var vm = this

      vm.name = 'Karuna'
    }
}())
