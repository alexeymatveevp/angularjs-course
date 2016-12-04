function converter(toUnit, factor, offset, input) {
    offset = offset || 0;
    return [((offset+input)*factor).toFixed(2), toUnit].join(" ");
}

var milesToKm = converter.bind(null, 'km',1.60936,undefined);
var poundsToKg = converter.bind(null, 'kg',0.45460,undefined);
var farenheitToCelsius = converter.bind(null, 'degrees C',0.5556, -32);

console.log(milesToKm(10));            // returns "16.09 km"
console.log(poundsToKg(2.5));          // returns "1.14 kg"
console.log(farenheitToCelsius(98));   // returns "36.67 degrees C"