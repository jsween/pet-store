import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   saveUser(){
     var params = {
       name: this.get('name') ? this.get('name') : " ",
       username: this.get('username') ? this.get('username') : " ",
       password: this.get('password') ? this.get('password') : " "
     };
     this.toggleProperty('addNewProduct');
     this.set('name', " ");
     this.set('username', " ");
     this.set('password', " ");
     this.sendAction('saveUser', params);
   }
 }
});
