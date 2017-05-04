var request = require('supertest');
var assert = require('assert');

describe('Test API', function () {
  var server;
  beforeEach(function () {
    server = require('./bin/server');
  });
  afterEach(function () {
    server.close();
  });
  it('Status', function testSlash(done) {
    request(server)
      .get('/status')
      .expect(200, done);
  });
  it('Status is ok', function testSlash(done) {
    request(server)
      .get('/status')
      .expect(200, (err, res) => {
        assert.equal(res.body.status, 'ok'),done();
      });
  });
});
