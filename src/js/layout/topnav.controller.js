/**
 * Top Navigation Controller
 * @namespace Controllers
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('ldTopNavController', ldTopNavController);

  /**
   * @namespace TopNavController
   * @desc Handles top navigation bar login and logout
   * @memberOf Controllers
   *
   * @param ldUserIdentityService
   * @param ldUserAuthService
   * @param $location
   * @param ldNotificationService
   * @param ldUserAccessService
   *
   * @ngInject
   */
  function ldTopNavController(ldUserIdentityService,
                              $location,
                              ldNotificationService,
                              ldUserAuthService,
                              ldUserAccessService) {
    var vm = this;
    vm.auth = ldUserAuthService;
    vm.notifier = ldNotificationService;
    vm.identity = ldUserIdentityService;
    vm.access = ldUserAccessService;


    /**
     * @name signIn
     * @desc Function for authenticating and signing in user
     * @memberOf Controllers.TopNavController
     *
     * @param {string} username
     * @param {string} password
     */
    vm.signIn = function (username, password) {
      vm.auth.authenticateUser(username, password)
        .then(function (promise) {
          if (promise === true) {
            vm.display = vm.identity.currentUser().display;
            vm.notifier.notify('You have successfully signed in!');
          } else {
            vm.notifier.error('Username/Password combination incorrect');
          }
        });
    };

    /**
     * @name signOut
     * @desc Function for logging out user
     * @memberOf Controllers.TopNavController
     */
    vm.signOut = function () {
      vm.auth.logOutUser();
      vm.display = '';
      vm.notifier.info('You have successfully signed out!');
      $location.path('/');
    };


  }
})();