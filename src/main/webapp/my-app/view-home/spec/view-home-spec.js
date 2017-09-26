'use strict';
/* eslint-env node */
/* global inject readJSON */
define(['angular-mocks', 'my-app'], function() {
    describe('HomeViewController', function() {
      // Test variables
      var $controller;
      var vm;
      var scope;
      var service;
      var linksURL;
      var linksJSON;
      var deferred;

      // Inject the application module
      beforeEach(function() {
        module('my-app');
      });

      beforeEach(inject(function(_$controller_, _$rootScope_, _$templateCache_,
                                 _$q_, _resourcesService_, _SERVICE_LOC_) {
        $controller = _$controller_;
        scope = _$rootScope_.$new();
        service = _resourcesService_;
        linksURL = _SERVICE_LOC_.helpfulLinks + '.json';
        linksJSON = readJSON(linksURL);
        deferred = _$q_.defer();

        // Avoid 'unexpected GET' failures when getting HTML templates
        spyOn(_$templateCache_, 'get').and.callFake(function(path) {
          return '<div></div>';
        });

        // Intercept service request and pass deferred promise
        spyOn(service, 'getHelpfulLinks')
          .and.returnValue(deferred.promise);

        vm = $controller('HomeViewController', {
          '$scope': scope,
          'resourcesService': service,
        });

        // When promise resolution is triggered, pass back the
        // helpful links
        deferred.resolve(linksJSON);
        scope.$apply();
      }));

      describe('initialize controller', function() {
        it('should set resource links in scope', function() {
          expect(vm.links).toBeTruthy();
          expect(vm.links).not.toEqual([]);
        });
      });
    });
});
