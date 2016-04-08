import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  actions: {
    saveUser(params) {
      var newUser = this.store.createRecord('users', params);
      newUser.save();
      this.get('currentUser').add(newUser);
      this.get('currentUser').signIn();
      this.transitionTo('index');
    }
  }
});
