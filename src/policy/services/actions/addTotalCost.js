import { roundNumber } from '../../../libs/roundHelper'

const addTotalCost = (data) => {
    const totalCost = data.policy.workers.reduce(
        (total, worker) => roundNumber(total + worker.total.cost), 0)
        
    data.policy.totalCost = {
        cost: totalCost,
        currency: 'UF'
    }
    return data
}

export default addTotalCost