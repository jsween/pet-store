import Ember from 'ember';

export default Ember.Service.extend({
  animals: [],
  add(animal) {
    this.get('animals').pushObject(animal);
  },
  remove(animal) {
    this.get('animals').removeObject(animal);
  },
  includes(animal) {
    return this.get('animals').includes(animal);
  },
  checkout(animal) {
    this.remove(animal);
    animal.destroyRecord();
  }
});
