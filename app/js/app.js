'use strict';

/* Routes */

// Declare app level module which depends on filters, and services
angular.module('reddit', ['reddit.filters', 'reddit.services', 'reddit.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login',       { templateUrl: 'partials/partialLogin.html', controller: LoginController    });
    $routeProvider.when('/hot',       { templateUrl: 'partials/partialStories.html', controller: HotController    });
    $routeProvider.when('/new',       { templateUrl: 'partials/partialStories.html', controller: NewController    });
    $routeProvider.when('/sub/:sub',  { templateUrl: 'partials/partialStories.html',     controller: SubController    });
    $routeProvider.when('/story/:id', { templateUrl: 'partials/partialStory.html',   controller: StoryController  });

    $routeProvider.otherwise({redirectTo: '/hot'});
  }]);

