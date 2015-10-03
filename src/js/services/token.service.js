/**
 * Token decoder factory
 * @namespace Factories
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('ldTokenService', ldTokenService);

  var profile;
  var output;
  var encodedProfile;

  /**
   * @namespace TokenService
   * @desc Decodes jwt token for FE usage.
   * @memberOf Factories
   */
  function ldTokenService() {
    return {
      getProfile: decodeProfile
    };

    ////////////////
    /**
     * @name url_base64_decode
     * @desc Decodes string to find profile information.
     * @memberOf Factories.TokenService
     *
     * @param str String to be decoded
     * @returns {string} profile String with decoded user information
     */
    function url_base64_decode(str) {
      output = str.replace('-', '+').replace('_', '/');

      switch (output.length % 4) {
        case 0:
          break;
        case 2:
          output += '==';
          break;
        case 3:
          output += '=';
          break;
        default:
          throw 'Illegal base64url string!';
      }

      profile = JSON.parse(window.atob(output));
      return profile; //polifyll https://github.com/davidchambers/Base64.js
    }

    /**
     * @name splitToken
     * @desc Splits incoming jwt token and returns the user info part
     * @memberOf Factories.TokenService
     *
     * @param {string} str String that goes to splitting.
     * @returns {string}
     */
    function splitToken(str) {
      return str.split('.')[1];
    }

    /**
     * @name decodeProfile
     * @desc Handles decoding process from wild jwt string to readable user information
     * @memberOf Factories.TokenService
     *
     * @param {string} str Jwt token that comes from the server
     * @returns {string} Return decoded profile
     */
    function decodeProfile(str) {
      encodedProfile = splitToken(str);
      return url_base64_decode(encodedProfile);
    }
  }
})();


