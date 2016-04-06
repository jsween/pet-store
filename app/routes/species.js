import Ember from 'ember';

export default Ember.Route.extend({
  model: function(param) {
    return this.store.query('animal', {
      orderBy: 'species',
      equalTo: param.animal_species
    });
  }
});
