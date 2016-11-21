function getData(callback) {
    console.log('long process start...');
    setTimeout(function() {
        console.log('...long process end');
        callback();
    }, 2000);
}
getData(function(data) {
    console.log('The data is: ' + data);
});
