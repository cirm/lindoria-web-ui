/**
 *
 * @namespace 'Controllers'
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('ldProvinceListController', ldProvinceListController);


  /**
   * @namespace
   * @memberOf 'Controllers'
   *
   * @ngInject
   */
  function ldProvinceListController(ldApiProvinceService) {
    /* jshint validthis: true */
    var vm = this;
    vm.provinceData = {};
    vm.title = 'ldProvinceListController';
    vm.display = {};
    vm.provinceService = ldApiProvinceService;

    activate();
    ////////////////

    /**
     * @name activate
     * @desc Module inittiation
     * @memberOf Controllers.UserListController
     */
    function activate() {
      queryProvinces();
    }

    /**
     * @name queryUser
     * @desc Queries user data for controller
     * @memberOf Controllers.UserListController
     *
     */
    function queryProvinces() {
      vm.provinceData = vm.provinceService.query();
    }
    
  }
})();