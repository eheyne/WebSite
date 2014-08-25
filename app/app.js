import Resolver from 'resolver';
import router from 'appkit/router';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  modulePrefix: 'appkit',
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});

export default App;
