var router = Ember.Router.map(function(){
  this.resource('course', { path: '/course/:course_id' }, function() {
    this.route('books');
    this.route('slides');
    this.route('demos');
    this.route('assignments');
    this.route('references');
  });
});

export default router;
