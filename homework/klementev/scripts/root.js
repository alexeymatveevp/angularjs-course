angular.module("root", ["ngSanitize", "ui.bootstrap"])
    .controller("index", ["$scope", "$http", function ($scope, $http) {
        const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=";

        $scope.fileAddress = "";
        $scope.selectedFileName = "";
        $scope.loadedFile = "";
        $scope.loadedJson = "";
        $scope.likedQuotes = [];
        $scope.quotesRegyme = true;
        $scope.requestingOptions = [1, 10, 30];
        $scope.numberOfRequestedQuotes = $scope.requestingOptions[0];
        $scope.numberOfQuotes = '1';


        $scope.getQuote = function () {
            $http.get(url.concat($scope.numberOfQuotes)).then(function (resp) {
                $scope.quotes = resp.data;
                $scope.quotesRegyme = true;
            });
        };

        $scope.likeQuote = function (quote) {
            var isPresent = false;
            for (var i=0; i<$scope.likedQuotes.length; i++) {
                if ($scope.likedQuotes[i].ID === quote.ID) {
                    isPresent = true;
                }
            }
            if (!isPresent) {
                $scope.likedQuotes.push(quote);
            }
        };

        $scope.unlikeQuote = function (quote) {
            var qus = $scope.likedQuotes;
            for (var i = 0; i < qus.length; i++) {
                if (qus[i].ID === quote.ID) {
                    qus.splice(i, 1);
                }
            }
        };

        $scope.getLikedQuotes = function () {
            $scope.quotes = $scope.likedQuotes;
            $scope.quotesRegyme = false;
        };

        $scope.saveToPc = function (data, filename) {

            if (!data || data.length == 0) {
                console.error('No data');
                alert("You didn't like anything!");
                return;
            }

            if (!filename) {
                filename = 'liked_quotes.json';
            }

            if (typeof data === 'object') {
                data = JSON.stringify(data, undefined, 2);
            }

            var blob = new Blob([data], {type: 'text/json'});

            // FOR IE:

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, filename);
            }
            else {
                var e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');

                a.download = filename;
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initEvent('click', true, false, window,
                    0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }
        };

    }])
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    scope.$apply(function () {
                        var file = changeEvent.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function (evt) {
                            scope.fileread = JSON.parse(evt.target.result);
                            alert("Import has been done successfully")
                        };
                        reader.onerror = function (evt) {
                            alert("Something's gone wrong during file reading!")
                        };
                        reader.readAsText(file);
                        // or all selected files:
                        // scope.fileread = changeEvent.target.files;
                    });
                });
            }
        }
    }]);