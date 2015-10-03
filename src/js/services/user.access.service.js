(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldUserAccessService', ldUserAccessService);

  /**
   *
   * @ngInject
   */
  function ldUserAccessService(ldUserIdentityService) {

    var currentUser;
    var identity = ldUserIdentityService;

    return {
      isAuthenticated: checkHasAuth,
      isAuthorizedFor: checkAuthRole
    };

    ////////////////

    function checkHasAuth() {
      currentUser = identity.currentUser();
      return !!currentUser;
    }

    function checkAuthRole(role) {
      currentUser = identity.currentUser();
      return !!currentUser && currentUser.roles.indexOf(role) > -1;
    }
  }

})();