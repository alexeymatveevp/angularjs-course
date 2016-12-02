var carName = 'Audi';
var that = this;
function a() {
    var carName = 'BMW';
    console.log(this.carName);
}
a();
// console.log(carName);