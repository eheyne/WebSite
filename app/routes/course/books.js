var BookRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({controller: 'course'});
  }
});

export default BookRoute;
