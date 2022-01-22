const express = require('express')
const app = express()
const os = require('os');
const port = process.env.PORT || 8080

app.get('/tea', (req, res) => {
    try {
        res.send(`<h3>Your tea has been served by ${os.hostname()}</h3>\n`
            + `Decoded Token ${req.headers['x-authentication-id']}`);
    } catch (error) {
        console.log(error)
    }

})
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})