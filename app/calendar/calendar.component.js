(function(app) {
  app.CalendarComponent =
    ng.core.Component({
      selector: 'calendar',
      templateUrl: 'app/calendar/calendar.component.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));