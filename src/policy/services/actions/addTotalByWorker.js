import { roundNumber } from '../../../libs/roundHelper'

const getTotal = ({ health, dentalCare }) => {
    return { 
        cost: roundNumber(health.cost + dentalCare.cost),
        price: roundNumber(health.price + dentalCare.price),
        copay: roundNumber(health.copay + dentalCare.copay),
        currency: health.currency
    }
}

const addTotalByWorker = (data) => {
    const workers = data.policy.workers.map((worker) => ({
        ...worker,
        total: getTotal(worker)
    }))
    data.policy.workers = workers;
    return data
}

export default addTotalByWorker