const delay = require('delay');
const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path');
const expect = chai.expect;
require('dotenv').config();
const apiServerUrl = process.env.SERVERURL
chai.use(chaiHttp);




const createDog = async (dog)=>{
    const res = await chai.request(apiServerUrl)
            .post(`/dog`)
            .send(dog)
    return res
}


const getDog = async (dogId)=>{
    const res = await chai.request(apiServerUrl)
        .get(`/dog/${dogId}`)
    return res
}

const getDogs = async ()=>{
    const res = await chai.request(apiServerUrl)
        .get(`/dogs`)
    return res
}

const updateDog = async (id,data)=>{
    const res = await chai.request(apiServerUrl)
    .put(`/dog/${id}`)
    .send(data)
return res
}


const deleteDog = async ()=>{
    const res = await chai.request(apiServerUrl)
        .delete(`/dog/${dogId}`)
    return res
}

module.exports = {
    createDog,
    getDog,
    getDogs,
    updateDog,
    deleteDog

}

