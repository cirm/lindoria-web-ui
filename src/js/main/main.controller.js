/**
 * Main landing page Controller
 * @namespace Controllers
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('ldMainController', ldMainController);

  /**
   * @namespace MainController
   * @desc Landing page controller
   * @memberOf Controllers
   *
   * @ngInject
   */
  function ldMainController() {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ldMainController';


    activate();

    ////////////////

    /**
     * @name activate
     * @desc handles main page data
     * @memberOf Controllers.MainController
     *
     * @ngInject
     */
    function activate() {
    }
  }
}());