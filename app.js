//justWood Vibes :)

const express = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors = require('cors');

const app = express();
      

//Connect
mongoose.connect('mongodb://localhost/miAmbulancia')
.then( db => console.log('Mongo esta conectado'))
.catch( err => console.log(err));

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/user',require('./routes/user'))

//Static
app.use(express.static('public'));


//Server is listening
const PORT = process.env.PORT || 3041
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))