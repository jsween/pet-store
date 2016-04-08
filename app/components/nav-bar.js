import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  shoppingCrate: Ember.inject.service(),
  users: Ember.computed('currentUser.users.[]', function() {
    return this.get('currentUser.users').length;
  }),
  displayNumInCart: Ember.computed('shoppingCrate.animals.[]', function() {
    return this.get('shoppingCrate.animals').length;
  }),
  actions: {
    signOut() {
      this.get('currentUser').signOut();
      this.set('signedIn', true);
    },
  }
});
