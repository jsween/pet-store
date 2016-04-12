import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCrate: Ember.inject.service(),
  totalCost: Ember.computed('shoppingCrate.animals.[]', function() {
    var total= 0;
    for (var i= 0; i < this.get('shoppingCrate.animals.length'); i++) {
      total += this.get('shoppingCrate.animals')[i].get('price');
    }
    return total;
  }),
  actions: {
    removeFromCart(animal) {
      this.get('shoppingCrate').remove(animal);
    }
  }
});
