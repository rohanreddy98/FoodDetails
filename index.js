const {getMergedFoodData} = require('./server');
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/food-details', async (req, res) => {
  try {
    const foodData = await getMergedFoodData();
    res.json(foodData);
} catch (error) {
  console.log(error, 'error')
    res.status(500).json({ error: 'An error occurred while fetching food data.' });
}
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});