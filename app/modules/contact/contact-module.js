(function() {
  'use strict';
  angular
    .module('hyperkind-tv.contact', [])
    .config(['$stateProvider', Routes]);

  function Routes($stateProvider) {
    $stateProvider
      .state('hyperkind-tv.contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      });
  }
}());
