(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldUserIdentityService', ldUserIdentityService);

  var currentUser;

  /* @ngInject */
  function ldUserIdentityService(ldTokenService, $window, ldApiUserService) {
    return {
      currentUser        : getCurrentUser,
      generateCurrentUser: generateCurrentUser,
      signOut            : doLogOut,
      updateCurrentUser  : updateCurrentUser
    };

    ////////////////

    function generateCurrentUser() {
      if (!!$window.sessionStorage.token) {
        currentUser = new ldApiUserService();
        angular.extend(currentUser, ldTokenService.getProfile($window.sessionStorage.token));
      }
    }

    function getCurrentUser() {
      if (!currentUser) {
        generateCurrentUser();
      }
      return currentUser;
    }

    function doLogOut() {
      currentUser = undefined;
    }

    function updateCurrentUser(token, clone) {
      $window.sessionStorage.token = token;
      angular.extend(clone, ldTokenService.getProfile(token));
      currentUser = clone;
    }

  }

})();