import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCrate: Ember.inject.service(),
  model() {
    return this.get('shoppingCrate').get('animals');
  }
});
