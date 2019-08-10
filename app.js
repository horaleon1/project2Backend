//justWood Vibes :)

const express = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
      

//Connect
mongoose.connect('mongodb+srv://admin:12345@ambulance-yh6w8.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true
}).then(() => {
  console.log('Conectado a Mongo DB Atlas')
})
.catch(err => console.log(err));




//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/user',require('./routes/user'))
app.use('/userPublic',require('./routes/userPublic'))
app.use('/userAmbulance/', require('./routes/userAmbulance'))

//Static
app.use(express.static(path.join(__dirname, 'public')));


//Server is listening
const PORT = process.env.PORT || 3041
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))