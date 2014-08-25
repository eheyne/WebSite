var ApplicationAdapter = DS.FixtureAdapter.extend({
  find: function(store, type, id) {
    debugger;
    if (id ==="WP") {
      id = 2;
    }
  }
});

export default ApplicationAdapter;
