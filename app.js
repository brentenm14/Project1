//load app server
const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Root")
})

//listen on port 3002
app.listen(3002, () => {
  console.log("Server is listening on port 3002...")
})
