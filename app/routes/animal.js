import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCrate: Ember.inject.service(),

  model(param) {
    return this.store.findRecord('animal', param.animal_id);
  },
  actions: {
    addToCrate(animal) {
      console.log(animal);
      this.get('shoppingCrate').add(animal);
    }
  }
});
