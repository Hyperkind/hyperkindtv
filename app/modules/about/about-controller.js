(function() {
  'use strict';
  angular
    .module('hyperkind-tv.about')
    .controller('AboutController', [Controller]);

  function Controller() {
    var vm = this;

    function initialize() {
      console.log('about controller');
    }

    initialize();
  }
}());
