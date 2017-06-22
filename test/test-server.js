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

//===== ABOUT ===========
describe('/about', function(){

  it('should GET /about', (done) => {
    chai.request('http://localhost:3000')
    .get('/about')
    .end((err, res) => {
      res.should.have.status(200)
      done()
    })
  })

})
//===== REGISTER ==========
describe('/register', function(){

  //REGISTER GET
  it('should GET /register', (done) => {
    chai.request('http://localhost:3000')
    .get('/register')
    .end((err, res) => {
      res.should.have.status(200)
      done()
    })
  })
  //REGISTER POST
  it('should POST /register', (done) => {
    chai.request('http://localhost:3000')
    .post('/register')
    .send({'username': 'test', 'password': 'test'})
    .end((err, res) => {
      res.should.have.status(200)
      done()
    })
  })


})
