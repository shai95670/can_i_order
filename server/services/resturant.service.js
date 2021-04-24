const axios = require('axios');

const generateResturantPromises = () => {
    const woltUrl = 'https://restaurant-api.wolt.com/v3/venues/slug/';
    let resturantNames = ['26-hamburger-gourmet', 'cafe-taizu', 'sora', 'susu-and-sons-givatayim'];
    let resturantPromises = resturantNames.map((resturantName) => {
        return axios.get(woltUrl + resturantName)
    });
    return resturantPromises;
}

const formatToResturantObj = (obj) => {
    const { online, public_url, mainimage } = obj;
    const { value:name } = obj.name[0]
    return Object.assign({}, { online, public_url, name, mainimage });
}

const fetchResturants = async () => {
    let resturantPromises = generateResturantPromises();
    let values = await Promise.all(resturantPromises);
    let resturantObjs = values.map((value) => {
        return formatToResturantObj(value.data.results[0]);
    });
    return resturantObjs;
}


module.exports = {
  fetchResturants
};