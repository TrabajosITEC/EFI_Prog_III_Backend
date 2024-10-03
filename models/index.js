import { fileURLToPath } from 'url'; 
import { dirname } from 'path'; 
import fs from 'fs'; 
import path from 'path'; 
import { Sequelize } from 'sequelize'; 
import config from '../config/config.json' assert { type: 'json' }; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

const env = process.env.NODE_ENV || 'development'; 
const configEnv = config[env]; 

const db = {}; 

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, configEnv); 

const modelFiles = fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js'); 
  });

for (const file of modelFiles) {
  const modelPath = path.join(__dirname, file); // Crea la ruta completa del archivo del modelo
  const modelFunction = await import(modelPath); // Importa el archivo del modelo dinámicamente
  const ModelInstance = modelFunction.default(sequelize); // Llama a la función exportada con sequelize
  db[ModelInstance.name] = ModelInstance; // Almacena la instancia del modelo en el objeto db
  console.log(`Modelo cargado: ${ModelInstance.name}`);
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // Llama a la función associate del modelo, pasándole el objeto db
  }
});

db.sequelize = sequelize; // Almacena la instancia de Sequelize en el objeto db
db.Sequelize = Sequelize; // Almacena la clase Sequelize en el objeto db

export default db; 
