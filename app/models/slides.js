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

export default slide;
