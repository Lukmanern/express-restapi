const app = require("express");
const port = 9000;
app.listen(port, () => {
      console.log("http://localhost:" + 9000)
});
app.get('/', (req, res) => {
      res.send("Hello World")
});