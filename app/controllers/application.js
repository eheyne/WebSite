var ApplicationController = Ember.ArrayController.extend({
  banner: function() {
   if (this.get("currentPath") === "index") {
     return "home-banner";
   } else {
     var courseController = App.__container__.lookup("controller:" + this.get("currentPath"));
     var url = courseController.get("target.location.lastSetURL") || courseController.get("target.location").getURL();
     var banner = "banner-" + url.substr(url.indexOf("/", 2) + 1, 1);
     return banner;
   }
 }.property("currentPath")
});

export default ApplicationController;
