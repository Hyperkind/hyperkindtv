(function() {
  angular
    .module('hyperkind-tv.sponsors')
    .controller('SponsorsController', [Controller]);

    function Controller() {
      var vm = this;

      function initialize() {
        console.log('sponsors');
      }

      initialize();
    };
})();
