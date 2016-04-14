import Ember from 'ember';

export default Ember.Component.extend({
  updateAnimalForm: false,
  chosenSpecies: null,
  chosenGender: null,
  chosenSize: null,
  actions: {
    showAnimalForm(animal) {
      this.set('updateAnimalForm', true);
    },
    hideAnimalForm(animal) {
      this.set('updateAnimalForm', false);
    },

    chosenSpecies() {
      this.set('chosenSpecies', event.target.value);
    },
    chosenGender() {
      this.set('chosenGender', event.target.value);
    },
    chosenSize() {
      this.set('chosenSize', event.target.value);
    },
    updateAnimal(animal) {
      var params = {
        name: this.get('name'),
        breed: this.get('breed'),
        species: this.get('chosenSpecies'),
        gender: this.get('chosenGender'),
        age: this.get('age'),
        size: this.get('chosenSize'),
        health: this.get('health'),
        temperment: this.get('temperment'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('updateAnimalForm', false);
      this.sendAction('updateAnimal', animal, params)
      }
    }
});
