/**
 *
 * @namespace 'Controllers'
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('ldProfileController', ldProfileController);


  /**
   * @namespace
   * @memberOf 'Controllers'
   *
   * @ngInject
   */
  function ldProfileController(ldUserIdentityService, ldNotificationService, ldUserAuthService) {

    var vm = this;
    var newUserData = {};
    vm.title = 'ldProfileController';
    vm.display = {};
    vm.identity = ldUserIdentityService;
    vm.notify = ldNotificationService;
    vm.auth = ldUserAuthService;
    vm.update = update;

    activate();

    ////////////////

    function activate() {
      vm.display = vm.identity.currentUser().display;
    }

    function update() {
      newUserData = {
        display: vm.display
      };
      if (vm.password && vm.password.length > 0) {
        newUserData.password = vm.password;
      }

      vm.auth.updateCurrentUser(newUserData)
        .then(function () {
          vm.notify.notify('Your user account has been updated');
        }, function (reason) {
          vm.notify.error(reason);
        });


    }

  }
})();