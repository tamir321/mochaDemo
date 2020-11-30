var expect = require('chai').expect;

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

describe('first Tests', ()=> {
  describe('should return 6', function() {
   

   
    it('three arguments', function() {
      console.log(this.test.fullTitle() + " starded");
      expect(sum(1,2,3)).to.equal(6)
      console.log(this.test.fullTitle() + " ended");
    })

    it('two arguments', function() {
      console.log(this.test.fullTitle() + " starded");
      console.log("test two arguments started")
      const a =3
      const b =6
       
      
      expect(sum(a,b)).to.equal(6)
      console.log(this.test.fullTitle() + " ended");
    }).timeout(1000 * 60 * 2)


   
  })


    context('without arguments', function() {
      it('should return 0', function() {
        console.log(this.test.fullTitle() + " starded");
        expect(sum()).to.equal(0)
        console.log(this.test.fullTitle() + " ended");
      })
    })
})



before(function() {
  // runs once before the first test in this block
 console.log(`Before  ${this.test.fullTitle()} was here `)
});

beforeEach(function() {
   // runs before each test in this block
   console.log(`Before each ${this.test.fullTitle()} was here `)
 });


 afterEach(function() {
  // runs once after the last test in this block
  console.log(`After each for ${this.test.fullTitle()} was here `)
  
});

