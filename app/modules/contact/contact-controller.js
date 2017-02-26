(function() {
  'use strict';
  angular
    .module('hyperkind-tv.contact')
    .controller('ContactController', [Controller]);

  function Controller() {
    var vm = this;

    function initialize() {
      console.log('contact');
    }
    initialize();
  }
})();
