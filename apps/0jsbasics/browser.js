var carName = 'Audi';
function a() {
    var carName = 'BMW';
    console.log(carName);
    console.log(this.carName);
}
a();
