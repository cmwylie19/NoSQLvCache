import Tracer from '@risingstack/jaeger'
const tracer = new Tracer({
  serviceName: 'RealTime'
})
import { cors, helmet, express, dotenv, http, SocketIO, bodyParser, compression } from './utlities'
dotenv.config();
import { User } from './models/User';
import { nosql } from './routerController';
import ConnectMongo from './db'
import { setAsync, getAsync, keysAsync } from './cache'

// -----------
// General Set
// -----------
const { log } = console

// -----------
// .env files
// -----------
const { MONGO,PORT } = process.env

// --------------
// Connect Mongo
// --------------
ConnectMongo(MONGO, log)

// --------------
// Setup Express
// --------------
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression());
app.use(cors())
app.use(helmet())

// --------------
// Express Route
// --------------
app.use('/nosql', nosql(User));


// -----------------
// Cache Operations
// -----------------
app.get('/cache/store/:key', async (req,res)=> {
  const { key } = req.params;
  const value = req.query;
  await setAsync(key, JSON.stringify(value));
  res
  .status(200)
  .send("Success")
})

app.get("/cache/:key", async (req, res)=> {
  const { key } = req.params;
  const value = await getAsync(key);
  res
  .status(200)
  .send(JSON.parse(value))
})

app.get('/cache/all/:key', async (req, res)=> {
  const value = await keysAsync('*');
  res
  .status(200)
  .send(JSON.stringify(value))
})


app.listen(PORT,()=>console.log(`NoSQLvCache service listening on ${PORT}`));

