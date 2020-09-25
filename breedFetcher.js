const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    
    if (!data[0]) {
      error = "Breed not found.";
      callback(error);
    } else if (!data[0]["description"]) {
      error = "Breed found, but no description available.";
      callback(error);
    } else {
      callback(error, data[0]["description"]);
    }
  });
};

module.exports = {fetchBreedDescription};