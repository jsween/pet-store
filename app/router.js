import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('species', { path: '/species/:animal_species'});
  this.route('admin');
  this.route('animal', { path: '/animal/:animal_id'});
  this.route('checkout');
  this.route('sign-up');
});

export default Router;
