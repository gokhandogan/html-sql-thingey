const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const { exec } = require("child_process");
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.static('build'))
app.use(bodyparser.text())
//app.use(bodyparser.json())

app.post('/api/parse', (req, res) => {
	console.log(req.body);
	//select * from c:\codes
	if(req.body.startsWith("select")){
		let dir = req.body.split(" ")[3];
		console.log(dir)
		exec("dir " + dir, (error, stdout, stderr) => {
			res.send(stdout);
		});    
		return;
	}
	//insert c:\codes\jojo.memes
	if(req.body.startsWith("insert")){
		let fileNameVariable = req.body.split(" ")[1];
		//echo.> c:\codes\jojo.memes
		console.log(fileNameVariable)
		exec("echo.> " + fileNameVariable, (error, stdout, stderr) => {
			res.send(fileNameVariable + " yaratıldı!!?");
		});
		return;
	}
	
	//remove c:\codes\jojo.memes
	if(req.body.startsWith("delete")){
		let fileNameVariable = req.body.split(" ")[1];
		//del c:\codes\jojo.memes
		console.log(fileNameVariable)
		exec("del " + fileNameVariable, (error, stdout, stderr) => {
			res.send(fileNameVariable + " silinebildi!!?");
		});
		return;
	}
	res.send("hata ile karşılaşıldı!");
	return;
})

app.listen(port, () => {
    console.log('listening on *:', port);
});