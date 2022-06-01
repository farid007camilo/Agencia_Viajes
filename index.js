
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import  dotenv  from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();


//conectar con la base de datos
db.authenticate()
    .then(() => console.log('base de datos conectada'))
    .catch(Error => console.log(Error))

//defiendo el puerto
const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';




//agregando pug
app.set('view engine', 'pug');


//creando el propio midelware 
app.use( (req, res, next) => {

    const year = new Date();
    res.locals.ActualYear = year.getFullYear(); //(obtener el año actual)
    res.locals.nombreSitio = 'Agencia de viajes'; // envair el nombre del sitio a index.pug

    return next();
});

// Agregar body parser para leer los datos del formulario.
app.use(express.urlencoded({extended: true}))


//definir la carpeta public
app.use(express.static('public'))

//agregando las rutas
app.use('/', router);

app.listen(port, host, () => {

    console.log(`el servirdor se esta ejecutando en el puerto ${port} y el host ${host}`);

})