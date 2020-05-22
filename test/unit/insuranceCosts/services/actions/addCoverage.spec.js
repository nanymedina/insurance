import { expect } from 'chai'
import sinon from 'sinon'
import * as coverageHelper from '../../../../../src/policy/helpers/coverageHelper'
import addCoverage from '../../../../../src/policy/services/actions/addCoverage'

describe('addCoverage', () => {
    const sandbox = sinon.createSandbox()
    const workers = [{
        age: 10,
        child: 2,
        health: 'coverage',
        dentalCare: 'coverage'
    },
    {
        age: 30,
        child: 0,
        health: 'coverage',
        dentalCare: 'coverage'
    }]

    const data = {
        policy: {
            company_percentage: 80,
            workers: [
                { age: 10, child: 2 },
                { age: 30, child: 0 }
            ]
        }
    }

    beforeEach(() => {
        sandbox.stub(coverageHelper, 'getCoverage').returns('coverage')
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('returns workers with coverage health and dental care', () => {
        const expectData = {
            ...data,
            policy: {
                ...data.policy,
                workers
            }
        }

        expect(addCoverage(data)).to.deep.equals(expectData)
    })
})
