const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.type('text/plain').send('KT3 App')
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

module.exports = app
