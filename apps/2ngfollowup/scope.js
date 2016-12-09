var App = angular.module('app', []);
App.controller('ctrl', function($scope, $rootScope) {
    var me = this;
    console.log(me);
    me.click = function() {
        console.log($scope.$$watchers);
        // $scope.$destroy();
        console.log(me);
    };
    // var newScope = $rootScope.$new();
    // newScope.qqq = 'qqq';
    $scope.counter = 0;
    var destroyWatcher = $scope.$watch('ct.data.www', function(val, old, c) {
        console.log('old: ' + old + ' new: ' + val);
        $scope.counter = $scope.counter + 1;
        // if ($scope.data) {
        //     $scope.data.www = $scope.data.www+1;
        // }
    });

    me.click2 = function() {
        me.data = {
            www: 'wwww'
        };
    };

    this.destroyWatcher = function() {
        destroyWatcher();
    };


    // $scope.$watch(function() {
    //     return {
    //         a: me.data
    //     }
    // }, function(val, old) {
    //     console.log(val);
    //     console.log(old);
    // }, true);

    $scope.$watchGroup(['ct.evaluate', 'ct.data.www'], function(val, old) {
        me.evaluated = $scope.$eval(val[0]);
    })

});