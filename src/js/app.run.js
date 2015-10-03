/**
 * runBlock
 * @namespace Modules
 */
(function () {
  'use strict';

  angular.module('app')
    .run(runBlock);

  /**
   * @name runBlock
   * @desc Redirects users when not authorized jwt is used.
   * @memberOf Modules
   *
   * @param $rootScope
   * @param $location
   *
   * @ngInject
   */
  function runBlock($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
      if (rejection === 'not authorized') {
        $location.path('/');
      }
    });
  }
})();