const http = require("http");
const PORT = 3001;

const listName = [
  {
    id: 1,
    name: "Pippo",
    surname: "Pluto",
    age: 20,
  },
  {
    id: 2,
    name: "Paperino",
    surname: "Topolino",
    age: 30,
  },
  {
    id: 3,
    name: "Topolino",
    surname: "Paperino",
    age: 22,
  },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && url === "/api/users") {
    const responseObj = { data: listName, offset: 3 };

    res.end(JSON.stringify(responseObj));
  } else {
    // res.statusCode = 404;
    // res.end(JSON.stringify({ error: "Endpoint non trovato" }));
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>Ciao ragazzi</h1>");
    res.write("<p style='color: red' >Ciao ragazzi</p>");
    res.end();
  }
});

server.listen(PORT, () => console.log(`In ascolto sulla porta ${PORT}`));
