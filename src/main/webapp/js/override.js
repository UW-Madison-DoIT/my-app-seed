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
      'APP_OPTIONS': {
        'optionsTemplateURL': 'my-app/templates/example-options.html',
      },
      'SERVICE_LOC': {
        'messagesURL': '', // Delete to get portal-wide notifications
        'kvURL': null,
        'groupURL': 'staticFeeds/groups.json',
        'sessionInfo': 'staticFeeds/guest-session.json',
        'shibbolethSessionURL': 'staticFeeds/Shibboleth.sso/Session.json',
        'helpfulLinks': 'json/helpful-links.json',
      },
      'NAMES': {
        'title': 'My App Seed',
        'fname': 'my-app-seed',
      },
      'MISC_URLS': {
        'rootURL': 'https://my.wisc.edu',
      },
    });
});
