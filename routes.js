const fs = require("fs");

const requestHandler = (req, res) => {
  // console.log(req.url, req.method, req.headers)
  // process.exit();

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const msg = fs.readFileSync('message.txt', 'utf8');
    res.write("<html>");
    res.write("<head><title>first app</title></head>");
    res.write(
      `<body><p>message = ${msg}</p><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const msg = parsedBody.split('=')[1];
      fs.writeFileSync("message.txt", msg);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>first app</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>first app</title></head>");
    res.write("<body><h1>Welcome to about us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>first app</title></head>");
    res.write("<body><h1>Welcome to node js project</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>first app</title></head>");
  res.write("<body><h1>first page</h1></body>");
  res.write("</html>");
  res.end();
}

module.exports = requestHandler;