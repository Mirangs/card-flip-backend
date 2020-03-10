import express, { Request, Response } from 'express';
const app = express();

import cors from 'cors';
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const initializeArray = (length: number) => {
  const array = [];
  while(array.length < length) {
    const item = Math.floor(Math.random() * 100) + 1;
    if (array.indexOf(item) === -1) array.push(item);
  }

  return array;
}

interface CardsModel {
  length: number
}

interface PostRequest<T> extends Request {
  body: T
}

app.post('/api/generate', (req: PostRequest<CardsModel>, res: Response) => {
  if (!req.body.length) {
    res.status(400).json({ message: 'Invalid input' });
  }

  const array = initializeArray(req.body.length);
  res.json({ array });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));