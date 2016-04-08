import Ember from 'ember';

export default Ember.Service.extend({
  users: [],
  signedIn: false,

  add(user) {
    this.get('users').pushObject(user);
  },

  signIn() {
      this.set('signedIn', true);
      console.log(this.signedIn);
  },

  signOut() {
      this.set('users', []);
      this.set('signedIn', false);
      // console.log(this.signedIn);
  }
});
