 
 require('dotenv').config();
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
 
const catid =  process.env.CATID
const apiServerUrl = process.env.SERVERURL

describe("cats Test",()=>{
    const catid = "5fb039872f25411c082b28ce"
    
    it("get cats should returen at list more than 1 cat",async ()=>{
        const res = await chai.request(apiServerUrl)
        .get('/cats')

        expect(res.body.data.length).to.be.greaterThan(1)
    }).timeout(1000 * 60 * 2)

    it("get cat by ID should returen my cat",async ()=>{
       
        const res = await chai.request(apiServerUrl)
        .get(`/cat/${catid}`)

        expect(res.body.data.name).to.be.equal('my cat')
    }).timeout(1000 * 60 * 2)

    it("try to get cat none exsist id returen error",async ()=>{
       
        const res = await chai.request(apiServerUrl)
        .get(`/cat/${catid+1}`)

        expect(res.status).to.be.equal(406)
        expect(res.body.info).to.be.equal('error during find cat ')
    }).timeout(1000 * 60 * 2)


    it("create new cat ",async ()=>{
       
        const catName =  generateName()
        const newCat = {
                        "name": catName,
                        "age": getRandomInt(0,12),
                        "type": "random Cat"
                    }

        const res = await chai.request(apiServerUrl)
            .post(`/cat`)
            .send(newCat)

        expect(res.body.info).to.be.equal('cat was created successfully')
        const newCatId = res.body.data._id
       
        const res2 = await chai.request(apiServerUrl)
            .get(`/cat/${newCatId}`)
        expect(res2.body.data.name).to.be.equal(catName)
    }).timeout(1000 * 60 * 2)

})