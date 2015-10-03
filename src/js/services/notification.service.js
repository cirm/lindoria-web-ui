/**
 * Notification Service
 * @namespace Factories
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldNotificationService', ldNotificationService);

  /**
   * @namespace NotificationService
   * @desc Handles serving pop-up notifications for the user
   * @memberOf Factories
   *
   * @ngInject
   */
  function ldNotificationService(toaster) {
    return {
      notify: notify,
      error : error,
      info  : info
    };

    ////////////////

    /**
     * @name notify
     * @desc Success message pop-up
     * @memberOf Factories.NotificationService
     *
     * @param {string} msg
     */
    function notify(msg) {
      toaster.pop('success', '', msg, 2500);
      console.log(msg);
    }

    /**
     * @name error
     * @desc Error message pop-up
     * @memberOf Factories.NotificationService
     *
     * @param {string} msg
     */
    function error(msg) {
      toaster.success({
        title: 'Wailing',
        body : msg
      });
      console.log(msg);
    }

    /**
     * @name info
     * @desc Info message pop-up
     * @memberOf Factories.NotificationService
     *
     * @param {string} msg
     */
    function info(msg) {
      toaster.pop({
        type: 'note',
        body: msg
      });
      console.log(msg);
    }
  }

})();