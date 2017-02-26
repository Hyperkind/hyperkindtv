(function() {
  angular
    .module('hyperkind-tv.resume')
    .controller('ResumeController', [Controller]);

    function Controller() {
      var vm = this;

      function initialize() {
        console.log('resume');
      }

      initialize();
    };
})();
