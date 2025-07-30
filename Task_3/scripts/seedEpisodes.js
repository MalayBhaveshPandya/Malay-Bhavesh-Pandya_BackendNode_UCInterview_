const mongoose = require('mongoose');
const axios = require('axios');
const Episode = require('../models/Schema.js');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

async function seedData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to DB :)');

    console.log('Fetching episodes from TVMaze...');
    const { data: episodes } = await axios.get('https://api.tvmaze.com/shows/431/episodes');
    console.log(`Got ${episodes.length} episodes`);

    for (const ep of episodes) {
      await Episode.updateOne(
        { id: ep.id },
        {
          id: ep.id,
          name: ep.name,
          season: ep.season,
          number: ep.number,
          airdate: ep.airdate,
          summary: ep.summary
        },
        { upsert: true }
      );
    }

    console.log('Seeding complete!');
  } catch (err) {
    console.error('Error during seeding:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from DB');
  }
}

seedData();
