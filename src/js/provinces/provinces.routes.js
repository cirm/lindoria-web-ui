/**
 * User list routing
 * @namespace Modules
 */
(function () {
  'use strict';

  angular
    .module('app')
    .config(configure);

  /**
   * @namespace Configuration
   * @param $routeProvider
   * @memberOf Modules
   *
   * @ngInject
   */
  function configure($routeProvider) {

    $routeProvider
      .when('/provinces', {
        templateUrl : 'provinces/provinceList.html',
        controller  : 'ldProvinceListController',
        controllerAs: 'vm',
        resolve     : {authCheck : isAuthenticated}
      });

    /**
     * @name checkAdmin
     * @desc checks if user is logged in
     * @memberOf Modules.Configuration

     * @returns {boolean} Has user got role?
     *
     * @ngInject
     */
    function isAuthenticated(ldRouteAccessService) {
      return ldRouteAccessService.isAuthenticated();
    }
  }
})();