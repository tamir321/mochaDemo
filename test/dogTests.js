 const delay = require('delay');
 const chai = require('chai');
 const chaiHttp = require('chai-http');
 const path = require('path');
 const expect = chai.expect;


 

 chai.use(chaiHttp);
 const {
    generateName,
    getRandomInt
    } = require(path.join(process.cwd(),'utils/name'))
 
    const {
        createDog,
        getDog,
        getDogs,
        updateDog,
        deleteDog
    
    }= require(path.join(process.cwd(),'utils/dogUtils'))

describe("dogs Test",()=>{
  

    it("get dogs should returen more than one dog",async ()=>{
       res = await getDogs();
        console.log(`we have ${res.body.data.length} in the system` )
        expect(res.body.data.length).to.be.greaterThan(1)
    }).timeout(1000 * 60 * 2)

   

    it("try to get a dog with none exsist id returen error",async ()=>{
       
        const res =await  getDog("notAdogId")
        expect(res.body.info).to.be.equal('error during find dog ')
    }).timeout(1000 * 60 * 2)


    it("After createing a new dog it is posible to retrive is data ",async ()=>{
       
        const dogName =  generateName()
        const newDog = {
                        "name": dogName,
                        "age": getRandomInt(0,12),
                        "type": "random Dog"
                    }

        const res = await createDog(newDog)

        expect(res.body.info).to.be.equal('dog was created successfully')
        const newDogId = res.body.data._id
        const res2 = await getDog(newDogId)
        expect(res2.body.data.name).to.be.equal(dogName)
    }).timeout(1000 * 60 * 2)

    it("dog data can be updated ",async ()=>{
       
        const dogName =  generateName()
        const Dog = {
                        "name": dogName,
                        "age": getRandomInt(0,12),
                        "type": "random Dog"
                    }

        const dog = await createDog(Dog)

        expect(dog.body.info).to.be.equal('dog was created successfully')
        const DogId = dog.body.data._id

        const newDog = {
            name: Dog.name + " updated",
            "age" : Dog.age,
            "type":"updated dog Type"
        }

        const res =  await updateDog(DogId,newDog)
        const dogNewData = await getDog(DogId)
        console.log(dogNewData.body)
        expect(dogNewData.body.data.name).to.be.equal(newDog.name)
    }).timeout(1000 * 60 * 2)


})