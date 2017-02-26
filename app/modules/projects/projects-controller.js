(function() {
  angular
    .module('hyperkind-tv.projects')
    .controller('ProjectController', [Controller]);

    function Controller() {
      var vm = this;

      function initialize() {
        console.log('project');
      }

      initialize();
    }
})();
