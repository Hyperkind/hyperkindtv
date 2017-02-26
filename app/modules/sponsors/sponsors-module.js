(function() {
  angular
    .module('hyperkind-tv.sponsors', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider
        .state('hyperkind-tv.sponsors', {
            url: '/sponsors',
            templateUrl: 'sponsors.html',
            controller: 'SponsorsController',
            controllerAs: 'vm'
        });
    }
})();
