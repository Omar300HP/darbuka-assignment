import express, { type Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import connectDB from './db';
import { RegisterRoutes } from './routes';
import swaggerDocument from '../../docs/swagger.json';

(async () => {
  await connectDB();
})();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

export default app;
