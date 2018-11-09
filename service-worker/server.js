const express = require('express');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/js', express.static('js'))


app.get('/sw.js', (req, res) => {
    const fileName =  "sw.js";
    fs.exists(fileName, function(exists){
        if (exists) {     
            res.writeHead(200, {
                "Content-Type": "application/javascript"
            });
            fs.createReadStream(fileName).pipe(res);
        } else {
            res.writeHead(400, {"Content-Type": "text/plain"});
            res.end("ERROR File does not exist");
        }
    });
})


app.listen(3000, () => console.log('server started'));