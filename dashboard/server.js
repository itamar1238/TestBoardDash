const express = require('express');
const app = express()
const port = 3000
const { commands } = require('../handlers/command-handler')
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/commands', (req,res) => res.render('commands', {
    subtitle: 'Commands',
    categories: [{name: 'Auto Mod', icon: "fas fa-gavel"}, {name: 'Economy', icon: "fas fa-coins"}, {name: 'General', icon: "fa-solid fa-browser"}, {name: 'Music', icon: "fas fa-music"}],
    commands: Array.from(commands.values())
}))

app.listen(port, () => console.log(`Server is live on port ${port}`))