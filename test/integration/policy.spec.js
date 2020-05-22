import nock from 'nock'
import request from 'supertest'
import { expect } from 'chai'
import app from '../../src/app'
import policyJson from '../stubs/policy.json'
import policyResponseJson from '../stubs/policyResponse.json'

const server = app
const path = '/ws/insurance/v1/policy'

describe('policy', () => {
    describe('GET /ws/insurance/v1/policy', () => {
        beforeEach(() => {
            nock('https://dn8mlk7hdujby.cloudfront.net')
                .get('/interview/insurance/policy')
                .reply(200, policyJson)
        })

        afterEach(() => {
            nock.cleanAll()
        })

        it('responds with status code  200', () => {
            return request(server)
                .get(path)
                .expect(200)
        })

        it('responds with policy', () => {
            return request(server)
              .get(path)
              .then((response) => {
                expect(response.body).to.deep.equal(policyResponseJson)
              })
          })

    })
})