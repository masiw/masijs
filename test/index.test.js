import { should } from 'chai'
import masi from '../build/masi'

describe('masi', () => {

  describe('#failure', () => {

    it('should fail', () => {
      false.should.be.true
    })
  })
  
  describe('#double', () => {

    it('should double 2 to 4', () => {
      masi.double(2).should.equal(4)
    })
  })

  describe('#isPrime', () => {

    it('should return false when the value is less than 2', () => {
      masi.isPrime(0).should.be.false
      masi.isPrime(1).should.be.false
      masi.isPrime(-4).should.be.false
    })

    it('should return true when the value is a prime', () => {
      masi.isPrime(2).should.be.true
      masi.isPrime(3).should.be.true
      masi.isPrime(5).should.be.true
      masi.isPrime(101).should.be.true      
    })

    it('should return false when the value is not a prime', () => {
      masi.isPrime(4).should.be.false
      masi.isPrime(6).should.be.false
      masi.isPrime(101 * 105).should.be.false
    })

    it('should return false when the value is not an integer', () => {
      masi.isPrime(3.5).should.be.false
    })
  })
})
