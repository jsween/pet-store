import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.attr(),
  species: DS.attr(),
  gender: DS.attr(),
  age: DS.attr(),
  size: DS.attr(),
  health: DS.attr(),
  temperment: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),

  shoppingCrate: Ember.inject.service(),
  inCart: Ember.computed('inCart.animals.[]', function() {
    return this.get('inCart').includes(this)
  })
});
