import express from "express";
import morgan from "morgan";
import routerRegister from "./routes/register.routes.js";
import cors from 'cors';
import db from "../models/index.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get('/', (req, res) => {
    res.send('Esto es express');
});
app.use("/register", routerRegister);

const port = process.env.PORT || 3001;

const startApp = async () => {
    try {
        console.log("Contenido de db:", Object.keys(db));
        console.log("Modelos cargados:", Object.keys(db).filter(key => db[key].findAll));
        
        // await db.sequelize.sync({ alter: true });
        // console.log('Base de datos sincronizada con alter: true.');

        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
};

startApp();

export default app;