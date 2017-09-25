'use strict';

define(['angular'], function(angular) {
  return angular.module('my-app.view-home.services', [])
    .factory('resourcesService', ['$log', '$http', 'SERVICE_LOC',
      function($log, $http, SERVICE_LOC) {
        var getHelpfulLinks = function() {
          return $http.get(SERVICE_LOC.helpfulLinks)
            .then(function(result) {
              return result.data;
            })
            .catch(function(error) {
              $log.log('Could not get links from ' + SERVICE_LOC.helpfulLinks);
            });
        };

        var getSessionInfo = function() {
          return $http.get(SERVICE_LOC.sessionInfo)
            .then(function(result) {
              return result.data;
            })
            .catch(function(error) {
              $log.error(error);
            });
        };

        return {
          'getHelpfulLinks': getHelpfulLinks,
          'getSessionInfo': getSessionInfo,
        };
      }]);
});
