import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnimal() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        breed: this.get('breed') ? this.get('breed') : "",
        species: this.get('species') ? this.get('species') : "",
        gender: this.get('gender') ? this.get('gender') : "",
        age: this.get('age') ? this.get('age') : "",
        size: this.get('size') ? this.get('size') : "",
        health: this.get('health') ? this.get('health') : "",
        temperment: this.get('temperment') ? this.get('temperment') : "",
        price: this.get('price') ? this.get('price') : "",
        image: this.get('image') ? this.get('image') : 'http://thewatchfullepisodes.com/wp-content/uploads/2016/03/no-image.png'
      };
      this.sendAction('saveAnimalToStore', params);
    }

  }
});
