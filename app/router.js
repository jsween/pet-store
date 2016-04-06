import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('species');
  this.route('species', { path: '/species/:animal_species'});
  this.route('admin');
});

export default Router;
