import { expect } from 'chai'
import { getCoverage } from '../../../../src/policy/helpers/coverageHelper'

describe('coverage helper', () => {
    it('returns cost zero when age the worker is greater than 65 ', () => {
        const coverage = getCoverage(70, 1, 80, 'health')
        expect(coverage.cost).to.equal(0)
    })

    it('returns cost zero when age the worker is iqual than 65 ', () => {
        const coverage = getCoverage(65, 1, 80, 'health')
        expect(coverage.cost).to.equal(0.35168)
    })

    context('when coverage type is health', () => {
        context('and age the worker is less than 65', () => {
            it('returns the coverage for worker without children', () => {
                const coverage = getCoverage(34, 0, 80, 'health')
                const expectCoverage = {
                    price: 0.279,
                    cost: 0.2232,
                    copay: 0.0558,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with a child', () => {
                const coverage = getCoverage(34, 1, 80, 'health')
                const expectCoverage = {
                    price: 0.4396,
                    cost: 0.35168,
                    copay: 0.08792,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with two children', () => {
                const coverage = getCoverage(34, 2, 80, 'health')
                const expectCoverage = {
                    price: 0.5599,
                    cost: 0.44792,
                    copay: 0.11198,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with more than two children', () => {
                const coverage = getCoverage(34, 5, 80, 'health')
                const expectCoverage = {
                    price: 0.5599,
                    cost: 0.44792,
                    copay: 0.11198,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
        })
    })

    context('when coverage type is dental care', () => {
        context('and age the worker is less than 65', () => {
            it('returns the coverage for worker without children', () => {
                const coverage = getCoverage(34, 0, 80, 'dentalCare')
                const expectCoverage = {
                    price: 0.12,
                    cost: 0.096,
                    copay: 0.024,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with a child', () => {
                const coverage = getCoverage(34, 1, 80, 'dentalCare')
                const expectCoverage = {
                    price: 0.1950,
                    cost: 0.156,
                    copay: 0.039,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with two children', () => {
                const coverage = getCoverage(34, 2, 80, 'dentalCare')
                const expectCoverage = {
                    price: 0.2480,
                    cost: 0.1984,
                    copay: 0.0496,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
    
            it('returns coverage for worker with more than two children', () => {
                const coverage = getCoverage(34, 5, 80, 'dentalCare')
                const expectCoverage = {
                    price: 0.2480,
                    cost: 0.1984,
                    copay: 0.0496,
                    currency: 'UF'
                }

                expect(coverage).to.deep.equal(expectCoverage)
            })
        })
    })
})