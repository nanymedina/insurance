import express from 'express'
import router from './policy/router'
import { getPort, getPrefixURL } from './core/config' 

const port = getPort();
const app = express();

app.use(express.json());
app.use(getPrefixURL(),router);
app.listen(port, () => console.log(`Escuchando Puerto ${port}`));

export default app
