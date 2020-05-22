import { expect } from 'chai'
import addTotalCost from '../../../../../src/policy/services/actions/addTotalCost'

describe('addTotalCost', () => {
    const worker = {
        total: {
            cost: 90,
            currency: 'UF'
        }
    }

    const data = {
        policy: {
            workers: [worker, worker]
        }
    }
    
    it('returns data adding total cost', () => {
        const expectedData = {
            policy: {
                ...data.policy,
                totalCost: {
                    cost: 180,
                    currency: 'UF'
                }
            }
        }
        
        expect(addTotalCost(data)).to.deep.equals(expectedData)
    })
})