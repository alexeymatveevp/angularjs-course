// this refers to object to which function is bound to
var pet = {
    name: 'Fluffy',
    sound: 'Woff',
    talk: function() {
        console.log(this.name + ' said ' + this.sound);
    }
};
pet.talk();

// in strict mode this will reference to undefined in global

// this is not assigned a value until an object invokes the function where this is defined

// apply function changes the context of the function to some obj
var cat = {
    name: 'Nyan',
    sound: 'Mew'
};
pet.talk.apply(cat);

// this when used in a method passed as a callback
document.getElementById('btn').addEventListener('click', pet.talk);
// solution: bind to obj
document.getElementById('btn2').addEventListener('click', pet.talk.bind(pet));

// this inside anonymous functions
var tariff = {
    name: 'Magenta Mobil',
    options: [{
        name: 'WLAN'
    }, {
        name: 'GPRS'
    }],
    transform: function() {
        // the fix is to store the object reference in some variable
        //var me = this;
        this.options.forEach(function(opt) {
            console.log('tariff ' + this.name + ' option transformed: ' + opt.name);
            //console.log('tariff ' + me.name + ' option transformed: ' + opt.name);
        })
    }
};
tariff.transform();