var ApplicationController = Ember.ArrayController.extend({
  banner: function() {
   if (this.get("currentPath") === "index") {
     return "home-banner";
   } else {
     var courseController = App.__container__.lookup("controller:" + this.get("currentPath"));
     var url = courseController.get("target.location.lastSetURL") || courseController.get("target.location").getURL();
     var pathArray = url.split('/');
     var banner = "banner-" + pathArray[2];
     console.log("banner is ", banner);
     return banner;
   }
 }.property("currentPath")
});

export default ApplicationController;
