const getConfig = () => ({
    prefixURL: '/ws/insurance/v1',
    port: process.env.NODE_PORT || 9090
  })
  
export const getPrefixURL = () => getConfig().prefixURL
  
export const getPort = () => getConfig().port
  
