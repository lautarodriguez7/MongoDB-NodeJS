const express = require('express');
const app = express();
const morgan = require('morgan');
const app = express();
// importing routes

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //nos muestra todo el lugar donde se encuentra en este caso /views
app.set('view engine','ejs'); //Mostramos un motor de plantilla (ejs)
// middlewares
app.use(morgan('dev'));

// Routes


// starting the server 
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });