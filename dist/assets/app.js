define("appkit/adapters/application",
  [],
  function() {
    "use strict";
    var ApplicationAdapter = DS.FixtureAdapter.extend();


    return ApplicationAdapter;
  });
define("appkit/app",
  ["resolver","appkit/router"],
  function(Resolver, router) {
    "use strict";

    var App = Ember.Application.create({
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit',
      Resolver: Resolver,
      Router: Ember.Router.extend({
        router: router
      })
    });


    return App;
  });
define("appkit/controllers/application",
  [],
  function() {
    "use strict";
    var ApplicationController = Ember.ArrayController.extend({
      banner: function() {
       debugger;
       if (this.get("currentPath") === "index") {
         return "home-banner";
       } else {
         var courseController = App.__container__.lookup("controller:" + this.get("currentPath"));
         var url = courseController.get("target.location.lastSetURL");
         var banner = "banner-" + url.substr(url.indexOf("/", 2) + 1, 1);
         return banner;
       }
     }.property("currentPath")
    });


    return ApplicationController;
  });
define("appkit/models/books",
  [],
  function() {
    "use strict";
    var book = DS.Model.extend({
      course: DS.belongsTo('course'),
      title: DS.attr("string"),
      author: DS.attr("string"),
      isbn: DS.attr("string"),
      srcUrl: DS.attr("string"),
      imageUrl: DS.attr("string")
    });

    book.FIXTURES = [
      {
        id: 1,
        title: "Programming the World Wide Web (7th Edition)",
        author: "Robert W. Sebesta",
        isbn: "978-0-13-266581-0",
        srcUrl: "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=978-0-13-266581-0&rh=n%3A283155%2Ck%3A978-0-13-266581-0",
        imageUrl: "http://ecx.images-amazon.com/images/I/51pQ5%2B56n1L._AA200_.jpg"
      },
      {
        id: 2,
        title: "Title 2",
        author: "",
        isbn: "",
        srcUrl: "",
        imageUrl: ""
      }
    ];


    return book;
  });
define("appkit/models/course",
  [],
  function() {
    "use strict";
    var course = DS.Model.extend({
      sname: DS.attr("string"),
      lname: DS.attr("string"),
      books: DS.hasMany('books', {async:true})
    });

    course.FIXTURES = [
      {
        id: 1,
        sname: "ISP",
        lname: "Internet Systems Programming",
        books: [1]
      },
      {
        id: 2,
        sname: "WP",
        lname: "Windows Programming",
        books: [2]
      }
    ];


    return course;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var router = Ember.Router.map(function(){
      this.resource('course', { path: '/course/:course_id' }, function() {
        this.route('book');
        this.route('demos');
      });
    });


    return router;
  });
define("appkit/routes/application",
  [],
  function() {
    "use strict";
    var ApplicationRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('course');
      }
    });


    return ApplicationRoute;
  });
define("appkit/store/store",
  [],
  function() {
    "use strict";
    var store = DS.Store.extend({
      revision: 11,
      adapter: 'DS.FixtureAdapter'
    });


    return store;
  });
//@ sourceMappingURL=app.js.map