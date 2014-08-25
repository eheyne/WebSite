var CourseRoute = Ember.Route.extend({
  serialize: function(model) {
    return { course_id: model.get('sname') };
  }
});

export default CourseRoute;
