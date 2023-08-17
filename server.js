const express = require("express");

const app = express();
const port = 5002;

app.get("/", (req, res) => {
  res.send(`
      <h1>99 Bottles of beer on the wall</h1>
      <a href="/98">Take one down, pass it around</a>
    `);
});

app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = req.params.number_of_bottles;

  if (numberOfBottles === 0) {
    res.send(`
        <h1>No more bottles of beer on the wall</h1>
        <a href="/">Start over</a>
      `);
  } else {
    const nextBottles = numberOfBottles - 1;
    const linkText =
      nextBottles === 1
        ? "Take one down, pass it around"
        : "Take one down, pass them around";

    res.send(`
        <h1>${numberOfBottles} Bottles of beer on the wall</h1>
        ${
          nextBottles > 0 ? `<a href="/${nextBottles}">${linkText}</a><br>` : ""
        }
        <a href="/">Start over</a>
      `);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
