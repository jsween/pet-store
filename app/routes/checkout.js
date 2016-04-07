import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCrate: Ember.inject.service(),
  model() {
    return this.get('shoppingCrate').get('animals');
  },
  actions: {
    checkout(model) {
      var that = this;
      model.forEach(function(animal) {
        that.get('shoppingCrate').checkout(animal);
      })
    }
  }
});
