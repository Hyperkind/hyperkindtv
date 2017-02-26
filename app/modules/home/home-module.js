(function() {
  'use strict';
  angular
    .module('hyperkind-tv.home', [])
    .config(['$stateProvider', Routes]);

  function Routes($stateProvider) {
    $stateProvider
      .state('hyperkind-tv.home', {
          url: '',
          templateUrl: 'home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
      })
      .state('hyperkind-tv.home_if_no_slash', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
      });
  }
}());
