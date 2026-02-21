const express = require('express');

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const notes = [
    // {
    //     tittle:"test titlwe 1",
    //     description:"test description 1"
    // },
    // {
    //     tittle:"test titlwe 2",
    //     description:"test description 2"
    // },
    // {
    //     tittle:"test titlwe 3",
    //     description:"test description 3"
    // }
]

app.post('/notes', (req, res) => { // Route to handle POST requests to /notes
    console.log(req.body);
    notes.push(req.body); // Add the received note to the notes array   

    res.send('Note received'); // Send a response back to the client
});

app.get('/notes', (req, res) => { // Route to handle GET requests to /notes
    res.json(notes); // Send the notes array as a JSON response
});


app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});