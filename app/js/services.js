'use strict';

/* Services */

angular.module('reddit.services', [])

  // The version of the application
  .value('version', '0.1')

  // Username/Password
  .value('username', 'myaccount')
  .value('password', 'mypassword')

  // The various URLs
  .value('loginpage', 'http://www.reddit.com/api/login/%user%?user=%user%&passwd=%passwd%&rem=%rem%&api_type=json')
  .value('hotpage'  , 'http://www.reddit.com/hot.json?jsonp=JSON_CALLBACK')
  .value('newpage'  , 'http://www.reddit.com/new.json?jsonp=JSON_CALLBACK')
  .value('storypage', 'http://www.reddit.com/comments/%s%.json?jsonp=JSON_CALLBACK')
  .value('subpage'  , 'http://www.reddit.com/r/%s%/.json?jsonp=JSON_CALLBACK')
  ;
