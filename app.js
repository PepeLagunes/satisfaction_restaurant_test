console.log("Hola tu mundo");
/*Customer satisfaction API*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//database conection
console.log(process.env.MONGO_URI)
mongoose.connect(
    "mongodb+srv://gerardolagunes:pollo@cluster0.un9m5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true}
)


app.get("/", function(req, res){
    res.send("Welcome to costumer satisfaction API")
});

// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});
