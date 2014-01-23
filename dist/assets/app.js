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


    return ApplicationController;
  });
define("appkit/models/assignments",
  [],
  function() {
    "use strict";
    var assignment = DS.Model.extend({
      course: DS.belongsTo('course'),
      name: DS.attr('string'),
      url: DS.attr('string')
    });

    assignment.FIXTURES = [
      {
        id: 1,
        name: "Assignment 1",
        url: './assets/documents/WP Assignment 1.pdf'
      }
    ];



    return assignment;
  });
define("appkit/models/books",
  [],
  function() {
    "use strict";
    var book = DS.Model.extend({
      course: DS.belongsTo('course'),
      title: DS.attr('string'),
      author: DS.attr('string'),
      isbn: DS.attr('string'),
      srcUrl: DS.attr('string'),
      imageUrl: DS.attr('string')
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
        title: "Pro C# 5.0 and the .NET 4.5 Framework",
        author: "Andrew Troelsen",
        isbn: "978-1430242338",
        srcUrl: "http://www.amazon.com/Pro-5-0-NET-4-5-Framework/dp/1430242337/ref=pd_bxgy_b_img_y",
        imageUrl: "http://ecx.images-amazon.com/images/I/51PimrR2lzL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg"
      },
      {
        id: 3,
        title: "Pro ASP.NET MVC 4",
        author: "Adam Freeman",
        isbn: "978-1430242369",
        srcUrl: "http://www.amazon.com/Pro-ASP-NET-MVC-Adam-Freeman/dp/1430242361/ref=pd_bxgy_b_img_y",
        imageUrl: "http://ecx.images-amazon.com/images/I/51Rms2VIcWL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg"
      }
    ];


    return book;
  });
define("appkit/models/course",
  [],
  function() {
    "use strict";
    var course = DS.Model.extend({
      sname: DS.attr('string'),
      lname: DS.attr('string'),
      number: DS.attr('string'),
      description: DS.attr('string'),
      syllabusUrl: DS.attr('string'),
      books: DS.hasMany('books', {async:true}),
      references: DS.hasMany('references', {async:true}),
      assignments: DS.hasMany('assignments', {async:true}),
      slides: DS.hasMany('slides', {async:true}),
      folders: DS.hasMany('folders', {async:true})
    });

    course.FIXTURES = [
      {
        id: 1,
        sname: 'ISP',
        lname: 'Internet Systems Programming',
        number: '3460:307',
        description: 'This course is an introduction to Web-based programming. Topics include HTML, XHTML, XML, CSS, JavaScript, PHP, Servlet, JSP, ASP.NET, MySQL, Ruby, Ruby on Rails, and AJAX.  The students will learn the basic concepts of WWW client-server communications and the skill to use the above tools to create Web applications.',
        syllabusUrl: "",
        books: [1],
        references: [],
        assignments: [],
        slides: [],
        folders: []
      },
      {
        id: 2,
        sname: 'WP',
        lname: 'Windows Programming',
        number: '3460:408/508',
        description: 'This course will expose the students to the latest concepts and techniques in programming on the Windows platform. Will teach the students how to design and implement enterprise applications. Microsoft .Net and C# will be used as the tools to implement the programs.',
        syllabusUrl: "./assets/documents/WP 408-508 Syllabus.pdf",
        books: [2,3],
        references: [],
        assignments: [1],
        slides: [1,2],
        folders: []
      }
    ];


    return course;
  });
define("appkit/models/demos",
  [],
  function() {
    "use strict";
    var demo = DS.Model.extend({
      demoFolder: DS.belongsTo('demoFolder'),
      text: DS.attr('string'),
      link: DS.attr('string'),
      source: DS.attr('string')
    });

    demo.FIXTURES = [
      {
        id: 1,
        text: 'audio',
        link: 'audio.html',
        source: ''
      }
    ];


    return demo;
  });
define("appkit/models/folders",
  [],
  function() {
    "use strict";
    var folder = DS.Model.extend({
      course: DS.belongsTo('course'),
      title: DS.attr('string')
      //link: DS.attr('string'),
      //demos: DS.hasMany('demos', {async:true})
    });

    folder.FIXTURES = [
      {
        id: 1,
        title: "Chapter 2"
        //demos: [1]
      },
      {
        id: 2,
        title: "Chapter 3"
        //demos: [1]
      },
      {
        id: 3,
        title: "Chapter 4"
        //demos: [1]
      }
    ];


    return folder;
  });
define("appkit/models/references",
  [],
  function() {
    "use strict";
    var reference = DS.Model.extend({
      course: DS.belongsTo('course'),
      name: DS.attr('string'),
      url: DS.attr('string')
    });

    reference.FIXTURES = [
      {
        id: 1,
        name: "",
        url: ''
      }
    ];


    return reference;
  });
define("appkit/models/slides",
  [],
  function() {
    "use strict";
    var slide = DS.Model.extend({
      course: DS.belongsTo('course'),
      name: DS.attr('string'),
      url: DS.attr('string')
    });

    slide.FIXTURES = [
      {
        id: 1,
        name: ".NET Platform Overview",
        url: 'assets/slides/WP-NET Overview.pdf'
      },
      {
        id: 2,
        name: "Building C# Applications",
        url: 'assets/slides/WP-Building CSharp Apps.pdf'
      }
    ];


    return slide;
  });
define("appkit/router",
  [],
  function() {
    "use strict";
    var router = Ember.Router.map(function(){
      this.resource('course', { path: '/course/:course_id' }, function() {
        this.route('books');
        this.route('slides');
        this.route('demos');
        this.route('assignments');
        this.route('references');
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
define("appkit/routes/course/assignments",
  [],
  function() {
    "use strict";
    var AssignmentsRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return AssignmentsRoute;
  });
define("appkit/routes/course/books",
  [],
  function() {
    "use strict";
    var BookRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return BookRoute;
  });
define("appkit/routes/course/demos",
  [],
  function() {
    "use strict";
    var DemosRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return DemosRoute;
  });
define("appkit/routes/course/index",
  [],
  function() {
    "use strict";
    var IndexRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return IndexRoute;
  });
define("appkit/routes/course/references",
  [],
  function() {
    "use strict";
    var ReferencesRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return ReferencesRoute;
  });
define("appkit/routes/course/slides",
  [],
  function() {
    "use strict";
    var SlidesRoute = Ember.Route.extend({
      renderTemplate: function() {
        this.render({controller: 'course'});
      }
    });


    return SlidesRoute;
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