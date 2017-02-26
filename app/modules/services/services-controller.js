(function() {
  angular
    .module('hyperkind-tv.services')
    .controller('ServicesController', [Controller]);

    function Controller() {
      var vm = this;

      function initialize() {
        console.log('services');
      }

      initialize();
    };
})();
