'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Reddit Browser', function() {

  // Reset URL on each test
  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to #/hot when going to /', function() {
    expect(browser().location().url()).toBe("/hot");
  });

});
