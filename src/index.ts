/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
// import {Item} from './items/item.interface';
import {major, naturalMinor} from './scales/scales.service';

// require controller modules...
const scalesController = require('./controllers/scales.controller');

const sql = require('mssql');

dotenv.config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SRV,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

// interface APIResponse {
//   results: Item[];
//   total: number[];
// }

/**
 * App Variables
 */
if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const router = express.Router();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/', router);

/**
 * App routes
 */

/* SQL Connection e.g.
const makeConnection = async (queryString: string, res: any): Promise<APIResponse | void> => {
  try {
      // make sure that any items are correctly URL encoded in the connection string
      await sql.connect(sqlConfig);
      const result = await sql.query(queryString);

      if (result) {
        const model = {
          results: result.recordset,
          total: result.rowsAffected,
        }

        res.send(model);
      }
  } catch (err) {
    throw err;
  } finally {
    res.end();
  }
}
*/

router.get('/', (req: any, res: any): void => {
  res.send('root')
});

/* SQL e.g.
app.get('/items', (req: any, res: any): Promise<APIResponse | void> => {
  const queryString = `SELECT
                        Id id,
                        Name name,
                        Image image,
                        Price price,
                        Description description
                      FROM Items`;
  return makeConnection(queryString, res);
});

app.get('/items/:id', (req: any, res: any): Promise<APIResponse | void> => {
  const { id } = req.params;
  const queryString = `SELECT
                        Id id,
                        Name name,
                        Image image,
                        Price price,
                        Description description
                      FROM items WHERE id = ${id}`;
  return makeConnection(queryString, res);
});
*/

router.get('/major/:root', scalesController.getMajorScale );


router.get('/minor/:root', scalesController.getMinorScale );

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

