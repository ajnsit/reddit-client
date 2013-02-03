'use strict';

/* Controllers */

/* Can't get login to work. Reddit seems to be responding
 * in a rather strange way to these requests */
function LoginController($rootScope, $scope, loginpage) {
  $scope.user = {
    user: 'myaccount',
    passwd: 'mypassword',
    rem: true
  };
  $scope.submit = function() {
    var loginlink = String(loginpage)
      .replace(/\%user\%/mg, $scope.user.user)
      .replace(/\%passwd\%/mg, $scope.user.passwd)
      .replace(/\%rem\%/mg, $scope.user.rem);
    // Need to use jQuery instead of $http here
    // As Reddit seems to bork on OPTIONS method
    $.post(loginlink, $scope.user, function(data) {
      $rootScope.user = $rootScope.user || {};
      $scope.modhash = data.data.modhash;
      $rootScope.user.user = $scope.user;
      $rootScope.user.modhash = $scope.modhash;
      $rootScope.$apply();
    });
  };
}
LoginController.$inject = ['$rootScope', '$scope', 'loginpage'];

function HotController($scope, $http, hotpage) {
  $http.jsonp(hotpage).success(function(data) {
    $scope.data = data.data.children;
    $scope.length = $scope.data.length;
    $scope.title = "Hot Stories";
    $scope.links = ["New Stories", "#/new"];
  });
}
HotController.$inject = ['$scope', '$http', 'hotpage'];

function NewController($scope, $http, newpage) {
  $http.jsonp(newpage).success(function(data) {
    $scope.data = data.data.children;
    $scope.length = $scope.data.length;
    $scope.title = "New Stories";
    $scope.links = ["Hot Stories","#/hot"];
  });
}
NewController.$inject = ['$scope', '$http', 'newpage'];

function SubController($scope, $http, $routeParams, subpage) {
  var sublink = String(subpage).replace(/\%s\%/mg, $routeParams.sub);
  $scope.title = 'Subreddit [' + $routeParams.sub + ']';
  $http.jsonp(sublink).success(function(data) {
    $scope.data = data.data.children;
    $scope.length = $scope.data.length;
    $scope.links = ["Front Page","#/hot"];
  });
}
SubController.$inject = ['$scope', '$http', '$routeParams', 'subpage'];

function StoryController($scope, $http, $routeParams, storypage) {
  var storylink = String(storypage).replace(/\%s\%/mg, $routeParams.id);
  $http.jsonp(storylink).success(function(data) {
    $scope.storydata = data[0].data.children[0].data;
    $scope.data = data[1].data.children;
    $scope.links = ["Front Page","#/hot"];
  });
}
StoryController.$inject = ['$scope', '$http', '$routeParams', 'storypage'];
