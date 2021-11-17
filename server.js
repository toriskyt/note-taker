const express = require(`express`);
const fs = require(`fs`);

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api`, api);

app.use(express.static(`public`));

// get route for homepage
app.get(`/`, (req, res) =>
  res.sendFile(path.join(_dirname, `/public/index.html`))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listenintg at http://localhost:${PORT}`)
);
