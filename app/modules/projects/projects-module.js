(function() {
  'use strict';
  angular
    .module('hyperkind-tv.projects', [])
    .config(['$stateProvider', Routes]);

  function Routes($stateProvider) {
    $stateProvider
      .state('hyperkind-tv.projects', {
          url: '/projects',
          templateUrl: 'projects.html',
          controller: 'ProjectController',
          controllerAs: 'vm'
      });
  }
}());
