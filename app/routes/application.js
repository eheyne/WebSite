var ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('course');
  }
});

export default ApplicationRoute;
