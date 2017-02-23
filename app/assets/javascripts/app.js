(function() {


  'use strict'

  angular
    .module('JobTrackerApp', ['templates', 'ui.router', 'Devise', 'ngMessages'])
    // .config(function($httpProvider) {
    //     // for CSRF errors
    //     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    // })
}())
