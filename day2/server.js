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

app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // extract user ID from URL parameters
  res.send(`User ID: ${userId}`); // response sent to client with the user ID
});

app.get('/home', (req, res) => {
  res.send('Home Page'); // response sent to client when /home URL is accessed
});


app.listen(3000); // server is listening on port 3000

