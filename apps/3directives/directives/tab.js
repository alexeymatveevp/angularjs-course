angular.module('myDirectives').directive('myTabs', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function MyTabsController($scope) {
            // init the panes array
            var panes = $scope.panes = [];

            $scope.select = function (pane) {
                panes.forEach(function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            this.addPane = function (pane) {
                panes.push(pane);
            };
        }],
        templateUrl: 'templates/my-tabs.html'
    };
}).directive('myPane', function () {
    return {
        require: '^^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        templateUrl: 'templates/my-pane.html'
    };
});