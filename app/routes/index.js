import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('admin');
  },
  actions: {
    checkAdmin(model) {
      var usernameAttempt = prompt("Please enter username");
      var passwordAttempt = prompt('Please enter your password');

      var self = this;
      model.forEach(function(administrator) {
        if (administrator.get('username') === usernameAttempt && administrator.get('password') === passwordAttempt) {
          self.transitionTo('admin');
          return alert("Your credentials have been verified!");
        } else {
        self.transitionTo('index');
        return alert('Username or Password are incorrect.');
      }
      });
    }
  }
});
