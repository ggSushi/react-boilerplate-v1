  const express = require(`express`);
  const app = express();
  const port = process.env.PORT | 5006;

  //TODO Set up variables for routers here


  // end routers
  app.use(express.json());

  //TODO Link ULR to routes here


  // end links
  app.use(express.static('public'));

  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });