const express = require("express")
const createError = require('http-errors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/authenticated', (req, res, next) => {
  const auth = req.headers.authorization
  console.log(auth)
  //console.log('hi')
  if (auth == null) {
    return next(createError(401, 'Auth headers not present'))
  }
  if (auth === "letmeinpleasethxbye") {
    res.setHeader('X-Authentication-Id', 1914034).json({
      Authenticated: true,
      uid: 1914034
    })
  } else {
    return next(createError.Unauthorized())
  }
})


const port = process.env.PORT || 8080

//
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

app.listen(port, () => {
  console.log(`auth_svc listening on ${port}`)
})