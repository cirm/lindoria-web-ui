(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldApiUserService', ldApiUserService);

  /* @ngInject */
  function ldApiUserService($resource) {

    return $resource('/api/users/:id', {id: '@id'}, {
      update: {method: 'PUT', isArray: false}
    });


  }

})();