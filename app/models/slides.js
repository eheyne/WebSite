var slide = DS.Model.extend({
  course: DS.belongsTo('course'),
  name: DS.attr('string')
});

slide.FIXTURES = [
  {
    id: 1,
    name: "Name 1",
    url: "url"
  },
  {
    id: 2,
    name: "Name 2",
    url: "url"
  }
];

export default slide;
