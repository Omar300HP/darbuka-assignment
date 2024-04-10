import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
// import cors from "cors";
import connectDB from './db';

const app = express();
const port = process.env.PORT || 5000;

(async () => {
  await connectDB();
})();

// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express! ALLAHU AKBAR!');
});
