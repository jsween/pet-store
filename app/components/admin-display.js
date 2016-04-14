import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(animal) {
      if (confirm('are your sure!')) {
        this.sendAction('destroyAnimal', animal);
      }
    },
    updateAnimal(animal, params) {
      this.sendAction('updateAnimal', animal, params);
    }
  }
});
