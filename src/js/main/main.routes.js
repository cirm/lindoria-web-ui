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
        templateUrl : '/partials/main/main',
        controller  : 'ldMainController',
        controllerAs: 'vm'
      });
  }
})();