(function () {
'use strict';
  angular
    .module('hyperkind-tv', [
        'ngRoute',
        'ngAnimate',
        'ui.router',
        'hyperkind-tv.about',
        'hyperkind-tv.contact',
        'hyperkind-tv.components',
        'hyperkind-tv.home',
        'hyperkind-tv.projects',
        'hyperkind-tv.resume',
        'hyperkind-tv.sponsors'

    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      // $urlRouterProvider.otherwise('/404');
      $locationProvider.html5Mode(true);
      $stateProvider.state('hyperkind-tv', {
        url: '',
        templateUrl: 'standard-layout.html'
      })
      .state('500', {
        url: '/500',
        templateUrl: '500.html'
      })
      .state('jc-admin.404', {
        url: '/404',
        templateUrl: '404.html'
      });
    }])
}());
