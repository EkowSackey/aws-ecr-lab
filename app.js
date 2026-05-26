const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const appVersion = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node App on Docker</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; background: #f4f4f4; }
          .card { background: white; padding: 24px; border-radius: 8px; max-width: 700px; }
          h1 { color: #08293C; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Node.js Docker App</h1>
          <p>Status: Running successfully REVIEWED</p>
          <p>TESTING: to show that actions tiggered on push to main branch</p>
          <p>Version: ${appVersion}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
