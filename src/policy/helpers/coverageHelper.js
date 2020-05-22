import { roundNumber } from '../../libs/roundHelper'

const pricesByCoverage = {
    dentalCare: [0.12, 0.1950, 0.2480],
    health: [0.279, 0.4396, 0.5599]
} 

const getCoverage = (age, childs, percentage, coverageType) => {
    const currency = 'UF'
    const prices = pricesByCoverage[coverageType]
    const index = childs >= 2 ? 2 : childs
    const price = prices[index]
    const cost = age > 65 ? 0 : roundNumber(price * percentage / 100)
    const copay = roundNumber(price - cost)
    
    return { 
        price, 
        cost,
        copay,
        currency
    }
}

export { getCoverage }