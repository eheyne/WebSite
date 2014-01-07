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

export default folder;
