var expect = require('chai').expect;

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

describe('first Tests', ()=> {

  before(function() {
   console.log("before was here ")
  });
  context('should return 6', function() {
    it('three arguments', function() {
     
     
      expect(sum(1,2,3)).to.equal(6)
    })

    specify('two arguments', function() {
      const a =3
      const b =6 
      
      expect(sum(a,b)).to.equal(6)
    })
  })


    context('without arguments', function() {
      it('should return 0', function() {
        expect(sum()).to.equal(0)
      })
    })
})
