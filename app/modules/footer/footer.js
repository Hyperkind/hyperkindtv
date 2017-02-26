(function() {
  angular
    .module('hyperkind-tv.footer', [])
    .directive('footer', Directive);
  function Directive() {
    function Controller($scope, $window) {

    }

    return {
      restrict: 'E',
      templateUrl: 'footer.html',
      controller: ['$scope', '$window', Controller],
      controllerAs: 'vm',
      bindToController: true,
      scope: {}
    };
  }
})();
