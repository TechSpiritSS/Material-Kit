const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT'],
  })
);

app.use(bodyParser.json({ limit: '10mb' }));

app.get('/theme', (req, res) => {
  try {
    const themeConfig = JSON.parse(
      fs.readFileSync('theme.config.json', 'utf-8')
    );
    res.json(themeConfig);
  } catch (error) {
    res.status(500).json({ error: 'Error reading theme.config.json' });
  }
});

app.put('/theme', (req, res) => {
  const newConfig = req.body;

  try {
    fs.writeFileSync('theme.config.json', JSON.stringify(newConfig, null, 2));
    res.json({ message: 'Theme config updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating theme.config.json' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
