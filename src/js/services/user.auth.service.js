(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldUserAuthService', ldUserAuthService);




  /* @ngInject */
  function ldUserAuthService($window, $q, $http, ldUserIdentityService) {
    var dfd;
    var clone;
    var identity = ldUserIdentityService;
    return {
      authenticateUser : doAuthRequest,
      logOutUser       : doLogOut,
      updateCurrentUser: doUpdateRequest
    };

    ////////////////

    function doAuthRequest(username, password) {
      dfd = $q.defer();
      $http
        .post('/auth', {username: username, password: password})
        .then(function authApiResponse(response) {
          if (response.data.token) {
            $window.sessionStorage.token = response.data.token;
            ldUserIdentityService.generateCurrentUser();
            dfd.resolve(true);
          } else {
            console.log('error');
            delete $window.sessionStorage.token;
            dfd.resolve(false);
          }
        });
      return dfd.promise;
    }

    function doLogOut() {
      delete $window.sessionStorage.token;
      ldUserIdentityService.signOut();
    }

    function doUpdateRequest(newUserData) {
      dfd = $q.defer();
      clone = angular.copy(identity.currentUser());
      angular.extend(clone, newUserData);
      clone.$update().then(function (response) {
        if (response.token) {
          identity.updateCurrentUser(response.token, clone);
          dfd.resolve(true);
        } else {
          // Handle login errors here
          dfd.resolve(response.error.reason);
        }
      });
      return dfd.promise;
    }
  }

})();