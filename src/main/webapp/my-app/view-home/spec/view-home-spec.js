'use strict';
/* eslint-env node */
/* global inject readJSON */
define(['angular-mocks', 'my-app'], function() {
    describe('HomeViewController', function() {
        var scope;
        var deferred;
        var service;
        var linksURL;
        var links;


        beforeEach(function() {
          module('my-app');
        });

        beforeEach(inject(function(
          _$controller_, _$q_, _$rootScope_,
          _resourcesService_, _SERVICE_LOC_) {
          scope = _$rootScope_.$new();
          linksURL = _SERVICE_LOC_.helpfulLinks + '.json';
          links = readJSON(linksURL).links;

          service = _resourcesService_;
          deferred = _$q_.defer();
          spyOn(service, 'getHelpfulLinks')
            .and.returnValue(deferred.promise);

          _$controller_('HomeViewController', {
            '$scope': scope,
            'resourcesService': service,
          });

          deferred.resolve(links);
          scope.$apply();
        }));

        it('should set links in scope', function() {
          // Test vm.links
          // expect(vm.links).toBeTruthy();
          // expect(vm.links).not.toEqual([]);
        });
    });
});
