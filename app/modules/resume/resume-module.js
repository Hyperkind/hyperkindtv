(function() {
  angular
    .module('hyperkind-tv.resume', [])
    .config(['$stateProvider', Routes]);

    function Routes($stateProvider) {
      $stateProvider
        .state('hyperkind-tv.resume', {
            url: '/resume',
            templateUrl: 'resume.html',
            controller: 'ResumeController',
            controllerAs: 'vm'
        });
    }
})();
