(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldApiProvinceService', ldApiProvinceService);

  /* @ngInject */
  function ldApiProvinceService($resource) {

    return $resource('/api/provinces/:name', {name: '@pName'}, {
      update: {method: 'PUT', isArray: false}
    });


  }

})();