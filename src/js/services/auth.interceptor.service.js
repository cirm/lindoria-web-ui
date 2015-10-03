(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldAuthInterceptorService', ldAuthInterceptorService);


  /* @ngInject */
  function ldAuthInterceptorService($q, $window, $rootScope) {
    var service = {
      request      : request,
      responseError: responseError
    };

    return service;

    ////////////////

    function request(config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    }

    function responseError(rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
        console.log('we got here? authinterceptor?')
      }
      return $q.reject(rejection.data.toString());
    }

  }

})();