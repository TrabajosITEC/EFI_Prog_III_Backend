import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { createRequire } from 'module';

// Importar JSON usando createRequire
const require = createRequire(import.meta.url);
const config = require('../config/config.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];

const db = {};

const sequelize = new Sequelize(
  configEnv.database,
  configEnv.username,
  configEnv.password,
  configEnv
);

const modelFiles = fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) &&
           (file !== 'index.js') &&
           (file.slice(-3) === '.js');
  });

// Cargar modelos usando pathToFileURL
for (const file of modelFiles) {
  try {
    const modelPath = pathToFileURL(path.join(__dirname, file)).href;
    const modelFunction = await import(modelPath);
    const ModelInstance = modelFunction.default(sequelize);
    db[ModelInstance.name] = ModelInstance;
    console.log(`Modelo cargado: ${ModelInstance.name}`);
  } catch (error) {
    console.error(`Error al cargar el modelo ${file}:`, error);
  }
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;










// import { fileURLToPath } from 'url'; 
// import { dirname } from 'path'; 
// import fs from 'fs'; 
// import path from 'path'; 
// import { Sequelize } from 'sequelize'; 
// import config from '../config/config.json' assert { type: 'json' }; 

// const __filename = fileURLToPath(import.meta.url); 
// const __dirname = dirname(__filename); 

// const env = process.env.NODE_ENV || 'development'; 
// const configEnv = config[env]; 

// const db = {}; 

// const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, configEnv); 

// const modelFiles = fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js'); 
//   });

// for (const file of modelFiles) {
//   const modelPath = path.join(__dirname, file); // Crea la ruta completa del archivo del modelo
//   const modelFunction = await import(modelPath); // Importa el archivo del modelo dinámicamente
//   const ModelInstance = modelFunction.default(sequelize); // Llama a la función exportada con sequelize
//   db[ModelInstance.name] = ModelInstance; // Almacena la instancia del modelo en el objeto db
//   console.log(`Modelo cargado: ${ModelInstance.name}`);
// }

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db); // Llama a la función associate del modelo, pasándole el objeto db
//   }
// });

// db.sequelize = sequelize; // Almacena la instancia de Sequelize en el objeto db
// db.Sequelize = Sequelize; // Almacena la clase Sequelize en el objeto db

// export default db; 




// "dev": "node --experimental-json-modules ./src/app.js",

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import fs from 'fs';
// import path from 'path';
// import { Sequelize } from 'sequelize';
// import { createRequire } from 'module';

// // Crear require para importar JSON
// const require = createRequire(import.meta.url);
// const config = require('../config/config.json');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const env = process.env.NODE_ENV || 'development';
// const configEnv = config[env];

// const db = {};

// const sequelize = new Sequelize(
//   configEnv.database, 
//   configEnv.username, 
//   configEnv.password, 
//   configEnv
// );

// // Leer archivos de modelos
// const modelFiles = fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && 
//            (file !== 'index.js') && 
//            (file.slice(-3) === '.js');
//   });

// // Cargar modelos
// for (const file of modelFiles) {
//   // Construir la ruta del archivo usando file:// para Windows
//   const modelPath = `file://${path.join(__dirname, file).replace(/\\/g, '/')}`;
//   const modelFunction = await import(modelPath);
//   const ModelInstance = modelFunction.default(sequelize);
//   db[ModelInstance.name] = ModelInstance;
//   console.log(`Modelo cargado: ${ModelInstance.name}`);
// }

// // Asociar modelos
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// // Exportar instancia y clase de Sequelize
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;