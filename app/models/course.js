var course = DS.Model.extend({
  sname: DS.attr('string'),
  lname: DS.attr('string'),
  number: DS.attr('string'),
  description: DS.attr('string'),
  syllabusUrl: DS.attr('string'),
  books: DS.hasMany('books', {async:true}),
  references: DS.hasMany('references', {async:true}),
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
    folders: []
  },
  {
    id: 2,
    sname: 'WP',
    lname: 'Windows Programming',
    number: '3460:408/508',
    description: 'This course will expose the students to the latest concepts and techniques in programming on the Windows platform. Will teach the students how to design and implement enterprise applications. Microsoft .Net and C# will be used as the tools to implement the programs.',
    syllabusUrl: "./assets/WP/WP 408-508 Syllabus.pdf",
    books: [2,3],
    references: [],
    folders: []
  }
];

export default course;
