'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('my-app.view-home.directives', [])
    .directive('subview', function() {
      return {
        restrict: 'E',
        templateUrl: require.toUrl('./partials/example-subview.html'),
        controller: 'HomeViewController',
        controllerAs: 'vm',
      };
    });
});
