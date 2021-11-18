const router = require("express").Router()
const notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')
const fs = require("fs")

router.get("/notes", function(req, res){
    try {
        res.json(notes)
    } catch (error) {
        res.json(error)   
    }
})

router.post("/notes", function(req, res){
    try { 
        const newNote = {
            title: req.body.title, 
            text: req.body.text,
            id: uuidv4()
        }
        console.log(newNote);
        const notesArray = JSON.parse(notes)
        console.log(notes)
        // const oldNotes = notes
    } catch (error) {
        console.log(error)
    }
})

module.exports = router