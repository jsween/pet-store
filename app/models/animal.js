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
  image: DS.attr()
});
