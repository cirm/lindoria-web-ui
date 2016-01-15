/**
 * Grid Service
 * @namespace Factories
 */

(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldGridService', ldGridService);

  /**
   *
   * @returns {*}
   *
   * @ngInject
   */
  function ldGridService(angularGrid) {
    return angularGrid;
  }

})();