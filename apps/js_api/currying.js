// converter example with bind
function converter(toUnit, factor, offset, input) {
    offset = offset || 0;
    return [((offset+input)*factor).toFixed(2), toUnit].join(" ");
}

var milesToKm = converter.bind(undefined, 'km', 1.60936, 0);
var poundsToKg = converter.bind(undefined, 'kg', 0.45460, 0);
var farenheitToCelsius = converter.bind(undefined, 'degrees C',0.5556, -32);

console.log(milesToKm(10));            // returns "16.09 km"
console.log(poundsToKg(2.5));          // returns "1.14 kg"
console.log(farenheitToCelsius(98));   // returns "36.67 degrees C"

// my example
var scope = {
  d: 'd'
}
function abc(a,b,c) {
  console.log(a + ' ' + b + ' ' + c + ' ' + this.d);
}
var a = abc.bind(scope, 'a')
a('c')
