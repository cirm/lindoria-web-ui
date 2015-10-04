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
      .when('/admin/users', {
        templateUrl : '/admin/userlist.html',
        controller  : 'ldUserListController',
        controllerAs: 'vm',
        resolve     : {routeResolveCheck: checkAdmin }
      });

    /**
     * @name checkAdmin
     * @desc checks if user logged in with admin rights
     * @memberOf Modules.Configuration
     * @param ldRouteAccessService
     * @returns {boolean} Has user got role?
     *
     * @ngInject
     */
    function checkAdmin(ldRouteAccessService) {
      return ldRouteAccessService.isAuthorizedFor('admin');
    }
  }
})();