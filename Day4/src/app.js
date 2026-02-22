const express= require('express');

const app= express(); 

app.use(express.json());

const notes = [
    // {
    //     name : "test title 1",
    //     description : "test description 1",
    // } ,
    // {
    //     name : "test title 2",
    //     description : "test description 2",
    // }
]


// app.get('/', (req, res)=>{
//     res.json("Hello world");
// })

//post notes to the server
app.post('/notes', (req, res)=>{
   console.log(req.body);
    notes.push(req.body);
   res.send("Note added successfully");

   console.log(notes);
})

//get notes from the server
app.get('/notes', (req, res)=>{
    res.send(notes);
    // res.json(notes);
})

//delete a note from the server
app.delete('/notes/:index', (req, res)=>{
    const index = parseInt(req.params.index);
    if(index >= 0 && index < notes.length){
        notes.splice(index, 1);
        res.send(`Note at index ${index} deleted successfully`);
    } else {
        res.status(404).send("Note not found");
    }
})

//update a note on the server
app.patch('/notes/:index', (req, res)=>{
    const index = parseInt(req.params.index);
    if(index >= 0 && index < notes.length){
        const updatedNote = req.body;
        notes[index] = {...notes[index], ...updatedNote};
        res.send(`Note at index ${index} updated successfully`);
    } else {
        res.status(404).send("Note not found");
    }   
})


module.exports= app;