const express = require('express')
const Gun = require('gun')

const app = express()
const port = 5000
app.use(Gun.serve)
const server = app.listen(port, () => {
  console.log(`DAPP is listening at PORT ${port}`)
})

Gun({ web: server })
