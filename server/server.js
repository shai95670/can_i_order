const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const resturantService = require('./services/resturant.service');

const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3000'],
    credentials: true,
    'Access-Control-Allow-Credentials': true
};

app.use(express.json());
app.use(cors(corsOptions));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get('/resturant', async function (req, res) {
    const allRestaurants = await resturantService.fetchResturants();
    res.status(200).send(allRestaurants);
})
