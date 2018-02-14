const {expect} = require('chai')
const request = require('supertest')
const db = require('../../server/db')
const app = require('../../app.js')
const Contract = db.model('contract')

describe('Contract routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/contracts/', () => {

    beforeEach(() => {
        return Contract.create({contractAddress: 123456789})
    })

    it('PUT /api/contracts should change from status "Created" to status "Pending"', () => {

      return request(app)
        .put('/api/contracts/1')
        .send({status: 'Pending'})
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.status).to.equal('Pending')
        })
    })
  }) 
}) 

