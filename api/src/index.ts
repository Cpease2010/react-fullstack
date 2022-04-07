import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { knex, setupDb } from './sqlite'

const app = express()
app.use(cors())
app.use(bodyParser.json())

/**
 * Test ping, this is used by the UI to determine if they are connected properly.
 * Once you see the connected message on the UI, you can remove this if you want to.
 */
app.get('/ping', (_, res) => {
  res.send('pong')
})

app.get('/entities', (req, res) => {
  knex('entity')
    .select()
    .then(entities => res.send(entities))
})

app.post('/entity', (req, res) => {
  knex('entity')
    .insert(req.body)
    .then(id => res.send('Your entity was created successfully with ID: ' + id))
})
app.delete('/entity/:id', (req, res) => {  
  knex('entity')
    .where(req.params)
    .del()
    .then(() => res.send(`Record with ID ${req.params.id} was sucessfully removed.`))
})
app.get('/entity/:id', (req, res) => {
  knex('entity')
    .where(req.params)
    .then(entity => entity.length > 0 ? res.send(entity) : res.status(404).send({message: `No entity found with ID: ${req.params.id}`}))
})

app.listen(5010, async () => {
  try {
    await setupDb()
    console.log('🚀 Skynet is active')
  } catch (e) {
    console.error(e)
    throw new Error('There was an issue setting up the DB')
  }
})
