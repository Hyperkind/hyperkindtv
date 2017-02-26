(function() {
  angular
    .module('hyperkind-tv.services', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider
        .state('hyperkind-tv.services', {
            url: '/services',
            templateUrl: 'services.html',
            controller: 'ServicesController',
            controllerAs: 'vm'
        });
    }
})();
