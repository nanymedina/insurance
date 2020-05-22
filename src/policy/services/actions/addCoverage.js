import { getCoverage } from '../../helpers/coverageHelper'

const addCoverage = (data) => {
    const percentage = data.policy.company_percentage
    const workers = data.policy.workers.map((worker) => ({
        ...worker,
        health: getCoverage(worker.age, worker.childs, percentage, 'health'),
        dentalCare: getCoverage(worker.age, worker.childs, percentage, 'dentalCare')
    }))
    data.policy.workers = workers;
    return data
}

export default addCoverage