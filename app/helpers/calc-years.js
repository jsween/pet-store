import Ember from 'ember';

export function calcYears(params) {
  var animal = params[0];
  debugger;
  if(animal.get('age') != 1) {
    return 'Years';
  }
  return 'Year';
}

export default Ember.Helper.helper(calcYears);
