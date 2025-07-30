const express = require('express');
const mongoose = require('mongoose');
const epRouter = require('./routes/episodes.js');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log("Connecting to:", process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('Connected to DB :)'))
.catch((err) => {
  console.error('DB Connection Error:', err.message);
  process.exit(1);
});

app.use('/api/episodes', epRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
