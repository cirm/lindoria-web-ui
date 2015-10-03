/**
 * App configuration
 * @namespace Modules
 */
(function () {
  'use strict';
  angular
    .module('app')
    .config(configure);

  /**
   * @namespace Configuration
   * @desc Application configuration on setup
   * @memberOf Modules
   *
   * @param $locationProvider
   * @param $httpProvider
   * @param $routeProvider
   *
   * @ngInject
   */
  function configure($locationProvider, $httpProvider, $routeProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $httpProvider.interceptors.push('ldAuthInterceptorService');
    $routeProvider.otherwise({redirectTo: '/'});
  }
})();
