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
  function ldProvinceListController(ldApiProvinceService,
                                    ldGridService) {
    /* jshint validthis: true */
    var vm             = this;
    vm.grid = ldGridService;
    vm.provinceData    = {};
    vm.title           = 'ldProvinceListController';
    vm.provinceService = ldApiProvinceService;

    vm.columDefs = [
      {headerName: 'Province', field: 'display'},
      {headerName: 'Regent', field: 'regent'},
      {headerName: 'Level', field: 'level'},
      {headerName: 'Loyalty', field: 'loyalty'}

    ];

    vm.gridOptions = {
      columDefs: vm.columDefs
    };

    activate()
      .then(function () {
        vm.gridOptions.api.setRowData(vm.provinceData);
      });
    ////////////////

    /**
     * @name activate
     * @desc Module initiation
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
      return vm.provinceData = vm.provinceService.query();
    }

  }
})();