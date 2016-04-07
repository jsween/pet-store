import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCrate: Ember.inject.service(),
  displayNumInCart: Ember.computed('shoppingCrate.animals.[]', function() {
    return this.get('shoppingCrate.animals').length;
  })
});
