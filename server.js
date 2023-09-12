const http = require("http");
const app = require("./index");
const { PORT } = require("./config/env_variable");

app.set('port',PORT || 5000 )

const server = http.createServer(app);

server.listen(PORT, ()=> console.log(`Server listen on port ${PORT}`));
