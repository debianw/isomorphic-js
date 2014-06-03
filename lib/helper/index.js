/**
 *
 */

module.exports = {

  /**
   *
   * @return {Boolean} true/false
   */

  isServer: function () {
    return typeof window === 'undefined';
  }
  
};