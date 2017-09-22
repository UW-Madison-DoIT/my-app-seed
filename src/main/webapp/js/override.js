define(['angular'], function(angular) {
  // see https://uw-madison-doit.github.io/uw-frame/configuration.html for howto
  return angular.module('override', [])
    .constant('OVERRIDE', {
      'APP_FLAGS': {
        'defaultTheme': 'uw-madison',
        'showSearch': false,
        'isWeb': false,
        'loginOnLoad': false,
      },
      'NAMES': {
        'title': 'My App Seed',
        'fname': 'my-app-seed',
      },
      'SERVICE_LOC': {
        'kvURL': null,
        'groupURL': 'staticFeeds/groups.json',
        'sessionInfo': 'staticFeeds/guest-session.json',
        'shibbolethSessionURL': 'staticFeeds/Shibboleth.sso/Session.json',
      },
      'MISC_URLS': {
        'rootURL': 'https://my.wisc.edu',
      },
    });
});
