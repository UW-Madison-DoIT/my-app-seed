'use strict';

define(['angular'], function(angular) {
  return angular.module('my-app.view-home.controllers', [])
    .controller('HomeViewController', ['resourcesService', '$window', '$log',
      function(resourcesService, $window, $log) {
        var vm = this;

        // Bindable members
        vm.links = [];

        // Scope functions
        /**
         * Go to the provided URL
         * @param url String
         */
        vm.goToUrl = function(url) {
          $window.location.href = url;
        };

        // Local functions
        /**
         * When the controller is initialized, get the list of resources from
         * the resources service.
         */
        var init = function() {
          // Get links from service
          resourcesService.getHelpfulLinks()
            .then(function(data) {
              if (data.links.length > 0) {
                vm.links = data.links;
              }
              return data;
            })
            .catch(function(error) {
              $log.log('Problem getting links from resources service.');
            });
        };

        init();
      }]);
});
