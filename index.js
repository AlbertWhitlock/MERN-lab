const express = require('express')
const parser = require('body-parser')
const Sports = require('./db/models.js')


const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(express.static("public"))

//READ
app.get('/', (req, res) => {
  Sports.find()
    .then((sports) => {
      res.json(sports)
    })
    .catch((err) => {
      console.log(err)
    })
})

//CREATE
app.post('/', (req, res) => {
  Sports.create(req.body)
    .then((sport) => {
      res.json(sport)
    })
    .catch((err) => {
      console.log(err)
    })
})

//UPDATE
app.get('/:id', (req, res) => {
    let { comment } = req.body;
        Sports.findById(req.params.id)
        .then(sport => {
            sport.comments.push( comment );
            sport.save(err => {
                res.json(sport)
            });
        })
        .catch((err) => {
            console.log(err)
          })
})

//DELETE
app.get('/:id', (req, res) => {
    Sports.findOneAndRemove(req.params.id).then(sport => {
        res.json(sport);
    });
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})