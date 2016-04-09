import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('users');
    },
    currentUser: Ember.inject.service(),
    actions: {
        logIn(params, users) {
            var usernameAttempt = params.username;
            var passwordAttempt = params.password;

            var self = this;

            users.forEach(function(user) {
              if (user.get('username') === usernameAttempt && user.get('password') === passwordAttempt) {
                self.get('currentUser').add(user);
                self.get('currentUser').signIn();
                self.transitionTo('index');
                return alert("Your credentials have been verified!");
            } else
            self.transitionTo('index');
            });
        }
    }
});
