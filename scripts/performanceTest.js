const fs = require('fs');
const path = require('path');
const axios = require('axios');

const testPerformance = async (folder = 'default') => {
  const iconsDirDefault = path.join(__dirname, `../icons/${folder}`);
  const iconUrls = fs
    .readdirSync(iconsDirDefault)
    .map((file) => `https://unpkg.com/piconss@latest/icons/${folder}/${file}`);
  for (let url of iconUrls) {
    const start = Date.now();

    try {
      await axios.get(url);
      const end = Date.now();
      console.log(`Icon at ${url} loaded in ${end - start}ms`);
    } catch (error) {
      console.error(`Error loading ${url}:`, error.message);
    }
  }
};

testPerformance();
testPerformance('dark');
testPerformance('light');

