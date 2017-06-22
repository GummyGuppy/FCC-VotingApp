'use strict'

const mocha = require('mocha'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      server = require('../app'),
      should = chai.should()


chai.use(chaiHttp)

//===== HOME ========
describe('/', function() {

  it('should GET /', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })


  })


})
