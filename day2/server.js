const express = require('express');
const app = express(); // server instance created

app.get('/', (req, res) => {
  res.send('Hello World!'); // response sent to client when root URL is accessed
});

app.get('/about', (req, res) => {
  res.send('About Page'); // response sent to client when /about URL is accessed
});

app.get('/contact', (req, res) => {
  res.send('Contact Page'); // response sent to client when /contact URL is accessed
}); 


app.get('/home', (req, res) => {
  res.send('Home Page'); // response sent to client when /home URL is accessed
});

app.get('/products', (req, res) => {
  res.send('Products Page'); // response sent to client when /products URL is accessed
});


app.listen(3000); // server is listening on port 3000

