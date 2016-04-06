import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAnimalToStore(params) {
      var animal = this.store.createRecord('animal', params);
      animal.save();
      this.transitionTo('admin');
    }
  }
});
