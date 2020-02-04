const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

const initializeArray = length => {
  const array = [];
  while(array.length < length) {
    const item = Math.floor(Math.random() * 100) + 1;
    if (array.indexOf(item) === -1) array.push(item);
  }

  return array;
}

app.post('/api/generate', (req, res) => {
  if (!req.body.length) {
    res.status(400).json({ message: 'Invalid input' });
  }

  const array = initializeArray(req.body.length);
  res.json({ array });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));