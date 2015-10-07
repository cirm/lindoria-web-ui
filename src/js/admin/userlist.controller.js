/**
 * User List Controller
 * @namespace Controllers
 */
(function (){
  'use strict';
  angular
    .module('app')
    .controller('ldUserListController', ldUserListController);

  /**
   * @namespace UserListController
   * @memberOf Controllers
   *
   * @param ldApiUserService
   *
   * @ngInject
   */
  function ldUserListController(ldApiUserService) {
    /* jshint validthis: true */
    var vm = this;
    vm.users = {};
    vm.userResource = ldApiUserService;

    vm.activate = activate;
    vm.title = 'ldUserListController';

    activate();
    ////////////////

    /**
     * @name activate
     * @desc Module inittiation
     * @memberOf Controllers.UserListController
     */
    function activate() {
     queryUsers();
    }

    /**
     * @name queryUser
     * @desc Queries user data for controller
     * @memberOf Controllers.UserListController
     *
     */
    function queryUsers() {
      vm.users = vm.userResource.query();
    }

  }
})();