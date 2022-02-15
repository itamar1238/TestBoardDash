const express = require('express');
const app = express()
const port = 3000

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/commands', (req,res) => res.render('commands'))

app.listen(port, () => console.log(`Server is live on port ${port}`))