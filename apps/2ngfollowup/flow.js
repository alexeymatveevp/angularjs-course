

angular.module('app', []);
//angular.module('app', []);
angular.module('app').controller('ctrl', function($scope, UnicornService) {
    var vm = this;

    this.asdf = 'fdsa';
    this.click = function() {
        console.log($scope)
        this.asdf = 'asdf'
    }
    this.data = {
        www: 'www'
    };
    $scope.$watch('ct.data.www', function(val, old) {
        console.log(val)
        console.log(old)
    })



    console.log($scope)


    $scope.$watchGroup(['ct.toEvaluate', 'ct.data.www'], function(val) {
        vm.evaluated = $scope.$eval(val[0]);
        // vm.data.www = vm.data.www+"a";
    })
});

//angular.element(function() {
//    angular.bootstrap(document, ['app']);
//});

