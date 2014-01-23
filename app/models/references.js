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

export default reference;
