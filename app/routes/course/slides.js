var SlidesRoute = Ember.Route.extend({
  model: function() {
    var url = this.get("router.url");
    var pathArray = url.split('/');
    var course = pathArray[2];
    return $.post("files.php?path=assets/" + course.trim() + "/slides").then(function(response) {
      return JSON.parse(response);
    });
  }
});

export default SlidesRoute;
