(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldApiUserService', ldApiUserService);

  /* @ngInject */
  function ldApiUserService($resource) {

    return $resource('/api/users/:username', {username: '@username'}, {
      update: {method: 'PUT', isArray: false}
    });


  }

})();