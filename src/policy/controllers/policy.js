import fetchPolicy from '../services/policy'

const policy = (_, res) =>
    fetchPolicy()
    .then(data => res.send(data))

export default policy