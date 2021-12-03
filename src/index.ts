/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
// import {Item} from './items/item.interface';
import {major, naturalMinor} from './notes/notes.service';
import {playNote} from './sounds/sounds.service';

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

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

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

app.get('/', (req: any, res: any): void => {
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

app.get('/major/:root', (req: any, res: any): any => {
  const {root} = req.params;
  const result = major( Number(root));
  res.send(result);
  // playNote(659, 4);
});

app.get('/minor/:root', (req: any, res: any): any => {
  const {root} = req.params;
  const result = naturalMinor( Number(root));
  res.send(result);
});

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

