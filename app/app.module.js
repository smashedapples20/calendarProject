(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.AppComponent, app.CalendarComponent ],
      bootstrap: [ app.AppComponent, app.CalendarComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));