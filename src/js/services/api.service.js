(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldApiService', ldApiService);


  /* @ngInject */
  function ldApiService($resource) {

    return {
      User: UserResource
    };

    ////////////////

    function UserResource() {
      return $resource('/api/users/:id', {id: '@id'}, {
        update: {method: 'PUT', isArray: false}
      });
    }


  }

}());