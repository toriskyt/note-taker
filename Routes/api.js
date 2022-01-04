const router = require("express").Router()
const notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')
const fs = require("fs")
async function getNotes(){
    const notes = await fs.readFileSync("db/db.json", "utf8")
    return JSON.parse(notes)
// return fs.readFile("../db/db.json");
}
router.get("/notes", function(req, res){
    try {
        // res.json(notes)
        getNotes().then(notes => res.json(notes))
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

        getNotes().then(oldNotes => oldNotes.concat(newNote)).then(updatedArr => fs.writeFileSync("db/db.json", JSON.stringify(updatedArr))).then(() => res.json({
            msg: "OK"
        }))
    } catch (error) {
        console.log(error)
    }
})

router.delete("/notes/:id", function(req, res){
    getNotes().then(allNotes => allNotes.filter((note) => note.id !== req.params.id)).then(updatedArr => fs.writeFileSync("db/db.json", JSON.stringify(updatedArr))).then(() => res.json({
        msg: "OK"
    })).catch(err => res.json(err))
})

module.exports = router