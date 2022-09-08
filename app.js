const express = require("express");
const app = express();
const path = require("path")
const mainRouter = require("./src/routes/route")

//Sirve para capturar la informacion que viene de un formulario
app.use(express.urlencoded({extended:false}))

// Me permite acceder al css, javascript(front), imagenes, etc.
app.use(express.static(path.join(__dirname, './public'))); // Necesario para los archivos estáticos en el folder /public

// Motor de plantilla que voy a utilizar: EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// En que puerto levanto

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto", PORT)
})

// Rutas principales
app.use("/", mainRouter); 