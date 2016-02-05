/**
 * Test public APIs
 */

var _ = require('lodash');
var expect = require('chai').expect;
var Rx = require('rx');
require('../../index.js');
var sinon = require('sinon');
var sologger = require('../sologger.js');

// Run tests
describe('Public API', function() {
	describe('zero items', function() {
	  it('should work as a Promise', function(done) {
	    var myPromise = Rx.Observable.empty();
	    myPromise.then(done, done);
	  });

	  it('should work as an Observable', function(done) {
	    var myPromise = Rx.Observable.empty();
	    myPromise.subscribe(function(result) {
	      expect(result).to.be.undefined;
	    }, done, done);
	  });
	});

	describe('one item', function() {
	  it('should work as a Promise', function(done) {
	    var myPromise = Rx.Observable.return('hello');
	    myPromise.then(function(result) {
	      expect(result).to.equal('hello');
	      done();
	    }, done);
	  });

	  it('should work as an Observable', function(done) {
	    var myPromise = Rx.Observable.return('hello');
	    myPromise.subscribe(function(result) {
	      expect(result).to.equal('hello');
	    }, done, done);
	  });
	});

	describe('multiple items', function() {
	  it('should work as a Promise', function(done) {
	    var myPromise = Rx.Observable.range(0, 5);
	    myPromise.then(function(result) {
	      expect(result).to.deep.equal([0, 1, 2, 3, 4]);
	      done();
	    }, done);
	  });

	  it('should work as an Observable', function(done) {
	    var i = 0;
	    var myPromise = Rx.Observable.range(0, 5);
	    myPromise.subscribe(function(result) {
	      expect(result).to.equal(i);
              i += 1; 
	    }, done, done);
	  });
	});
});
