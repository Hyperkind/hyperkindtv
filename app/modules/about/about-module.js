(function() {
  'use strict';
  angular
    .module('hyperkind-tv.about', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider
        .state('hyperkind-tv.about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
        })
    }
}());
