// index.ts
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});