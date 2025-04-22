// require('dotenv').config()

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('rushikesh learning express')
// })

// app.get('/about', (req, res) => {
//   res.send('About page')
// })

// app.get('/login', (req, res) => {
//   res.send('You have succesfully logged in')
// })

// app.get('/profile', (req, res) => {
//   res.send('Here you can see your profile and edit it if you want to')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv' 
dotenv.config();


const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('rushikesh learning express')
})

app.get('/expense', (req, res) => {
  res.send('Expense page  - Here you can see your expenses and add new ones and can make changes to it')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});