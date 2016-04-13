import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('animal');
  },
  actions: {
    saveAnimalToStore(params) {
      var animal = this.store.createRecord('animal', params);
      animal.save();
      this.transitionTo('admin');
    },
    destroyAnimal(animal) {
      animal.destroyRecord(),
      this.transitionTo('admin');
    },
    updateAnimal(animal,params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          animal.set(key, params[key]);
        }
      });
      animal.save();
      this.transitionTo('admin');
    }
  }
});
