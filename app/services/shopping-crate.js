import Ember from 'ember';

export default Ember.Service.extend({
  crate: [],
  
  add(animal) {
    return this.get('crate').pushObject(animal);
  }
});
