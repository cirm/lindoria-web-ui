(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldRouteAccessService', ldRouteAccessService);

  /**
   *
   * @ngInject
   */
  function ldRouteAccessService(ldUserIdentityService, $q) {

    var currentUser;
    var identity = ldUserIdentityService;

    return {
      isAuthenticated: checkHasAuth,
      isAuthorizedFor: checkAuthRole
    };

    ////////////////
    /**
     * @returns {*}
     * @ngInject
     */
    function checkHasAuth() {
      currentUser = identity.currentUser();
      if (!!currentUser === true) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }

    function checkAuthRole(role) {
      currentUser = identity.currentUser();
      if (!!currentUser && currentUser.roles.indexOf(role) > -1) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }

})();