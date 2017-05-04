var request = require('supertest');
var assert = require('assert');

describe('GET APIs', function () {
  var server;
  beforeEach(function () {
    server = require('./bin/server');
  });
  afterEach(function () {
    server.close();
  });
  it('Returns the list of users with /users', function testSlash(done) {
    request(server)
      .get('/users')
      .expect(200, (err, res) => {
        assert.equal(Array.isArray(res.body), true),done();
      });
  });
  it('Returns the user (Nicolas) with /users/2', function testSlash(done) {
    request(server)
      .get('/users/2')
      .expect(200, (err, res) => {
        assert.equal(res.body.name, 'Nicolas'),done();
      });
  });
  it('Returns two users (Steve, Nicolas) with /users/1/2', function testSlash(done) {
    request(server)
      .get('/users/1/2')
      .expect(200, (err, res) => {
        assert.equal(Array.isArray(res.body), true);
        assert.equal(res.body.length, 2);
        assert.equal(res.body[0].name, 'Steve');
        assert.equal(res.body[1].name, 'Nicolas');
        done();
      });
  });
});
