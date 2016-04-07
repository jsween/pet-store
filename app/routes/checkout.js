import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCrate: Ember.inject.service(),
  // displayTotal: Ember.computed('shoppingCrate.animals.[]', function() {
  //   var total = 8;
  //   var animalArray = shoppingCrate.animals;
  //   animalArray.forEach(function(animal) {
  //     debugger;
  //     total += 5;
  //   });
  //   console.log(total);
  //   return total;
  // }),
  model() {
    return this.get('shoppingCrate').get('animals');
  },
  actions: {
    checkout(model) {
      var that = this;
      model.forEach(function(animal) {
        that.get('shoppingCrate').checkout(animal);
      })
    }
  }
});
