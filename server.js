const express = require(`express`);
const viewRoute = require("./Routes/view")
const apiRoute = require("./Routes/api")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`public`));
app.use("/", viewRoute);
app.use("/api", apiRoute);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
