'use strict';

describe('Service: popupservice', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var popupservice;
  beforeEach(inject(function (_popupservice_) {
    popupservice = _popupservice_;
  }));

  it('should do something', function () {
    expect(!!popupservice).toBe(true);
  });

});
