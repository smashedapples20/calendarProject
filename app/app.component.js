(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<calendar></calendar>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));