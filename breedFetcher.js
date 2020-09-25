const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("Breed not found.");
  } else if (!data[0]["description"]) {
    console.log("Breed found, but no description available.");
  } else {
    console.log(data[0].description);
  }
});