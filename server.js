const app = require('./app.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO EM: http://localhost:${PORT}`);
});
