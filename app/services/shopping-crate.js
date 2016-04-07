import Ember from 'ember';

export default Ember.Service.extend({
  animals: [],

  add(animal) {
    this.get('animals').pushObject(animal);
  }
});
