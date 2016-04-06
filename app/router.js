import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('species', {path: '/species/:animal_name'});
  this.route('admin');
});

export default Router;
