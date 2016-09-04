const chai = require('chai')
  , masi = require('../src/masi')
  , math = require('mathjs')
  , _ = require('lodash')

let should = chai.should()
  , expect = chai.expect

describe('masi', function() {

  describe('#double', function() {

    it('should double 2 to 4', function() {
      masi.double(2).should.equal(4)
    })
  })

  describe('#isPrime', function() {

    it('should return false when the value is less than 2', function() {
      masi.isPrime(0).should.be.false
      masi.isPrime(1).should.be.false
      masi.isPrime(-4).should.be.false
    })

    it('should return true when the value is a prime', function() {
      masi.isPrime(2).should.be.true
      masi.isPrime(3).should.be.true
      masi.isPrime(5).should.be.true
      masi.isPrime(101).should.be.true      
    })

    it('should return false when the value is not a prime', function() {
      masi.isPrime(4).should.be.false
      masi.isPrime(6).should.be.false
      masi.isPrime(101 * 105).should.be.false
    })

    it('should return false when the value is not an integer', function() {
      masi.isPrime(3.5).should.be.false
    })
  })

  describe('#combinations', function() {
    it('should return an empty array when the argument is empty', function() {
      masi.combinations([]).should.be.an('array')
      masi.combinations([]).should.have.length(0)
    })

    it('should return an array with the same element', function() {
      var result = masi.combinations(['a'])
      result.should.have.length(1)
      result[0].should.be.an('array')
      result[0].should.have.length(1)
      result[0][0].should.equal('a')
    })

    it('should return an array containing the argument', function() {
      var result = masi.combinations('a')
      result.should.be.an('array')
      result.should.have.length(1)
      result[0].should.be.an('array')
      result[0].should.have.length(1)
      result[0][0].should.equal('a')
    })

    it('should return the correct combinations', function() {
      var result = masi.combinations([1, 2, 3, 4, 5])
      result.should.have.length(
	_.sumBy(
	    [1, 2, 3, 4, 5]
	  , value => math.combinations(5, value)
	)
      )
    })

    it('should return undefined for undefined', function() {
      should.not.exist(masi.combinations(undefined))
    })
  })
})
