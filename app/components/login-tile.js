import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        logIn(users) {
            var params = {
                username: this.get('username'),
                password: this.get('password'),
        };
            this.set('username', " "),
            this.set('password', " "),
            this.sendAction('logIn', params, users);
        }
    }
});
