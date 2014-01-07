var router = Ember.Router.map(function(){
  this.resource('course', { path: '/course/:course_id' }, function() {
    this.route('books');
    this.route('slides');
    this.route('demos');
  });
});

export default router;
