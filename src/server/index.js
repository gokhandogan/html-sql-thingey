const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.static('build'))
app.use(bodyparser.text())
//app.use(bodyparser.json())

app.post('/api/parse', (req, res) => {
	console.log(req.body);
	
	
	
	
	
	
    res.send("asdsad\nasdasd");
})

app.listen(port, () => {
    console.log('listening on *:', port);
});
