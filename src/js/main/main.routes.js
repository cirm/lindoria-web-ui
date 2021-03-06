(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  /**
   *
   * @param $routeProvider
   *
   * @ngInject
   */
  function configure($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'main/main.html',
        controller  : 'ldMainController',
        controllerAs: 'vm'
      });
  }
})();