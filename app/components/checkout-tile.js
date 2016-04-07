import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCrate: Ember.inject.service(),
  actions: {
    removeAnimalFromCart(animal) {
      this.get('shoppingCrate').remove(animal);
    }
  }
});
