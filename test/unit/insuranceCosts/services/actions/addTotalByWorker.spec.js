import { expect } from 'chai'
import addTotalByWorker from '../../../../../src/policy/services/actions/addTotalByWorker'

describe('addTotalByWorker', () => {
    const worker = {
        age: 10,
        child: 2,
        health: {
            price: 100,
            cost: 90,
            copay: 10,
            currency: 'UF'
        },
        dentalCare: {
            price: 100,
            cost: 90,
            copay: 10,
            currency: 'UF'
        }
    }

    const data = {
        policy: {
            workers: [worker, worker]
        }
    }
    
    it('returns total cost by worker', () => {
        const expectedData = {
            policy: {
                workers: [
                {...worker, total: {price: 200, cost: 180, copay: 20, currency: 'UF'}},
                {...worker, total: {price: 200, cost: 180, copay: 20, currency: 'UF'}}
                ]
            }
        }
        
        expect(addTotalByWorker(data)).to.deep.equals(expectedData)
    })
})