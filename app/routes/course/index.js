var IndexRoute = Ember.Route.extend({
  model: function(params) {
   debugger; 
  },
  renderTemplate: function() {
    this.render({controller: 'course'});
  }
});

export default IndexRoute;
