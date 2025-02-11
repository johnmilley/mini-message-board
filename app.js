const express = require('express')
const path = require('node:path')

const app = express()


// set up VIEWS engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// Application Middleware
app.use(express.urlencoded({ extended: true }))

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" }
]

// our MODEL
const colours = [
    { name: 'red', count: 0 },
    { name: 'blue', count: 0 },
    { name: 'yellow', count: 0 },
    { name: 'green', count: 0 },
    { name: 'orange', count: 0 },
    { name: 'purple', count: 0 }
]

app.get('/', (req, res) => {
    res.render("index", { 
        title: "What is your Favorite Colour?",
        links, colours })
})

app.post('/', (req, res) => {
    const favouriteColour = req.body['fav-colour']
    // console.log(req.body[])
    // update count 
    console.log(favouriteColour)
    let selectedColour = colours.map(colour => {
        if (colour.name === favouriteColour) {
            colour.count++
        }
    })
    
    res.redirect('/')
})

app.listen(8888, () => console.log("server started..."))