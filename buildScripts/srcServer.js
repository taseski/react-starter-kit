// var express = require('express');
// var path = require('path');
// var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// var port = 3000;
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Aleksandar", "lastName": "Taseski", "email":"aleksandar.taseski@hotmail.com"},
    {"id": 2, "firstName": "John", "lastName": "Smith", "email":"john.smith@hotmail.com"},
    {"id": 3, "firstName": "James", "lastName": "Bond", "email":"james.bond@hotmail.com"}
  ]);
});

app.listen(port, (err) => {
  if(err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
