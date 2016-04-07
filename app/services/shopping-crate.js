import Ember from 'ember';

export default Ember.Service.extend({
  crate: [],

  add(animal) {
    this.get('crate').pushObject(animal);
  }
});
