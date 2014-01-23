var AssignmentsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({controller: 'course'});
  }
});

export default AssignmentsRoute;
