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

export default demo;
