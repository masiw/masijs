const Log = require('log')

let log = new Log('info')

const masi = {
  // number -> number
  double: n => n + n,
  // integer -> boolean
  isPrime: i => {

    if (i < 2 || isNaN(i) || Math.floor(i) !== i)
      return false

    if (i === 2)
      return true

    if (i % 2 === 0) {
      return false
    }
    
    let maxDiv = Math.sqrt(i)
    for (let div = 3; div < maxDiv; div += 2) {
      if (i % div === 0) {
	// div divides i
	return false
      }
    }

    // no divisors
    return true
  },
  // array<object> -> array<array<object>>
  combinations: data => {
    if (typeof data == 'undefined')
      return undefined
    
    var combinator = (active, rest) => {
      if (!active.length && !rest.length)
        return []
      if (!rest.length)
        return [active]
      return combinator(active.concat([rest[0]]), rest.slice(1))
	.concat(combinator(active, rest.slice(1)))
    }
    return combinator([], data)
  }
}
  

module.exports = masi
