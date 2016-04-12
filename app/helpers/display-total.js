import Ember from 'ember';

export function displayTotal(model) {


  var animals = model[0];
  var totalPrice = 0;

  // var i = 0;
  animals.forEach(function(animal) {
    // debugger;
    var price = parseInt(animal.get('price'));
    totalPrice += price;
    // i++;
    // totalPrice += parseInt(animal.get('price'));
    // totalPrice += 5;
  });
  return totalPrice;
}



export default Ember.Helper.helper(displayTotal);
