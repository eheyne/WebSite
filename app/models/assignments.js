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
  },
  {
    id: 2,
    name: "Assignment 2",
    url: './assets/documents/WP Assignment 2.pdf'
  }
];

export default assignment;

