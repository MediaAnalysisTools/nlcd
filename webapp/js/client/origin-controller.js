/**
 *
 *
 */

app.controller("NlcdOriginController", ["$scope", "$location", "$http", "NcldApiFactory",
    function ($scope, $location, $http, NcldApiFactory) {
        /**
        **/

        $scope.GetText = function() {


            if ($scope.query.storyOriginUrl.length == 0) {
                //TODO(zaytsev@usc.edu): Show Error Message
                alert("//TODO(zaytsev@usc.edu): Show Error Message");
                return;
            }

            NcldApiFactory.getArticle($scope.query.storyOriginUrl)
            .success(function(article) {

                //TODO(zaytsev@usc.edu): Show Message that Article Text is Loaded
                console.log(article);
                $scope.query.storyOriginText = article.text;

            }).
            error(function(data, status, headers, config) {

                //TODO(zaytsev@usc.edu): Show Error Message
                console.log(data);
                alert("//TODO(zaytsev@usc.edu): Show Error Message");

            });


        };






        /**
        **/
}]);