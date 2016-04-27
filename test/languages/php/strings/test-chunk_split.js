// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var chunk_split = require('../../../../src/php/strings/chunk_split.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/chunk_split.js (tested in test/languages/php/strings/test-chunk_split.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'H*e*l*l*o* *w*o*r*l*d*!*'
    var result = chunk_split('Hello world!', 1, '*')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'Hello worl*d!*'
    var result = chunk_split('Hello world!', 10, '*')
    expect(result).to.deep.equal(expected)
    done()
  })
})