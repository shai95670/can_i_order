const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
// for sockets:
// const http = require('http').createServer(app);
const port = process.env.PORT || 3001;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3000'],
        credentials: true,
        'Access-Control-Allow-Credentials': true
    };
    app.use(cors(corsOptions));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get('/restaurant', async function (req, res) {
    const allRestaurants = await fetchResturants()
    console.log(allRestaurants);
    res.send(allRestaurants)
})

const generateResturantPromises = () => {
    const woltUrl = 'https://restaurant-api.wolt.com/v3/venues/slug/';
    let resturantNames = ['26-hamburger-gourmet', 'cafe-taizu', 'sora', 'susu-and-sons-givatayim'];
    let resturantPromises = resturantNames.map((resturantName) => {
        return axios.get(woltUrl + resturantName)
    });
    return resturantPromises;
}

const formatToResturantObj = (obj) => {
    const { online, public_url, name } = obj;
    return Object.assign({}, { online, public_url, name });
}


const fetchResturants = async () => {
    let resturantPromises = generateResturantPromises();
    let values = await Promise.all(resturantPromises);
    let resturantObjs = values.map((value) => {
        return formatToResturantObj(value.data.results[0]);
    });

    return resturantObjs;
}