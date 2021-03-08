const http = require("http");
const PORT = process.env.PORT || 8080;

http
  .createServer(function (req, res) {
    res.write(`{ "status": 200`);
    res.end();
  })
  .listen(PORT, () => console.log(`server started on ${PORT}`));
