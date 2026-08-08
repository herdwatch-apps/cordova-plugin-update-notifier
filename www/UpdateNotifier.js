var exec = require('cordova/exec');

var UpdateNotifier = {
  /**
   * Registers a callback that will be triggered when the update is downloaded.
   * @param {Function} callback - Function to execute when the update is ready
   */
  onUpdateReady: function (callback) {
    exec(
      function () {
        if (typeof callback === 'function') {
          callback();
        }
      },
      function (err) {
        console.error("UpdateNotifier onUpdateReady error", err);
      },
      "UpdateNotifier",
      "onUpdateReady",
      []
    );
  },

  /**
   * Completes the update installation
   * (should be called in response to onUpdateReady)
   */
  completeUpdate: function () {
    exec(
      null,
      function (err) {
        console.error("UpdateNotifier completeUpdate error", err);
      },
      "UpdateNotifier",
      "completeUpdate",
      []
    );
  }
};

module.exports = UpdateNotifier;
