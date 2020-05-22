# Insurance
Repository with example of service rest that responds with a policy for a company

- Clone this repo in https://github.com/nanymedina/insurance.git

# Node
- Execute `nvm use` to use the correct version of Node
- Execute `npm install` to install project dependencies.
- Execute `npm start` start application on port 9090


```bash
curl -i http://localhost:9090/ws/insurance/v1/policy
```

# Test
`npm test` Execute tests of all
`npm run test:unit` Execute test unit
`npm run test:integration` execute test the integration

#Description Response

```jsonc
type Coverage = {
"price": number, // price of the policy
"cost": number, // cost to company
"copay": number, // cost to worker
"currency": string // currency apply
}
```

------------


```jsonc
{
   "message": string
   "policy": {
      "workers": [
         {
            "age": number,
            "childs": number,
            "health": Coverage
            "dentalCare":Coverage
            "total": Coverage // total of all coverages
         }
      ],
      "has_dental_care": boolean,
      "company_percentage": number,
      "totalCost": { // total cost of the policy for the company
         "cost": number,
         "currency": string
      }
   }
}
```