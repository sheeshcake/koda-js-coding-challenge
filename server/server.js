// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.
const express = require('express')
const cors = require('cors')
const app = express()
const api = express()
const port = 3001
const questions = require('./data/questions.json')


app.use(cors())
app.use('/api', api)
api.get('/get-question', (req, res) => {
    let randomQuestions = []
    let randomIndexes = []
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * questions.results.length)
        if(randomIndexes.includes(randomIndex)){
            i--
            continue
        } else {
            randomIndexes.push(randomIndex)
        }
        randomQuestions.push(questions.results[randomIndex])
    }
    res.send(randomQuestions)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})