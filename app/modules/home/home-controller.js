(function() {
  'use strict';
  angular
    .module('hyperkind-tv.home')
    .controller('HomeController', [Controller]);

  function Controller() {
    var vm = this;

    function initialize() {
      console.log('home');
    }
    initialize();
  }
})();
