npm install @babel/register @babel/preset-env --save-dev
npm install @babel/cli --save-dev
"type": "module",
npx sequelize-cli db:create

La razón por la que tu código escrito en ES6 solo se transpila correctamente cuando le pones la extensión .cjs en lugar de .js se debe a la forma en que Node.js y Babel manejan las extensiones de archivo y el tipo de módulo. Aquí tienes un desglose:

1. Tipo de módulo en Node.js
"type": "module" en package.json:
Cuando estableces "type": "module", le indicas a Node.js que todo el código .js debe tratarse como módulos ES (ESM).
Esto significa que Node.js espera encontrar la sintaxis de importación y exportación de ES6 (es decir, import y export).
Extensión .cjs:
Cuando usas la extensión .cjs, Node.js trata esos archivos como módulos CommonJS, independientemente de la configuración de package.json.
Esto permite que el código use require y module.exports, pero también puedes utilizar Babel para transformar la sintaxis moderna.
2. Cómo Babel Interactúa con las Extensiones
Babel y extensiones de archivo:

Babel puede estar configurado para transpilar automáticamente archivos que tiene configurados en tu proyecto.
Si tienes un archivo .js y estás utilizando "type": "module", Babel no lo procesará como esperas porque Node.js ya está interpretando ese archivo como un módulo ES.
Uso de Babel con .cjs:

Cuando cambias la extensión a .cjs, Babel puede transpilar ese archivo sin interferencia de la interpretación de Node.js, permitiendo que el código ES6 sea transformado a CommonJS.
Además, Babel puede ejecutar el código original sin problemas porque el archivo .cjs no se interpreta como un módulo ES de forma predeterminada.
Resumen
Código .js:

Es interpretado por Node.js como un módulo ES debido a "type": "module".
Si usas import y export, Node.js intentará ejecutarlo tal cual, y no pasará por Babel a menos que se configure de forma diferente.
Código .cjs:

Se interpreta como CommonJS, lo que permite que Babel lo transpile correctamente, manejando import y export.
Solución
Si quieres mantener "type": "module" y utilizar Babel, puedes hacer lo siguiente:

Deja los archivos con la extensión .cjs y sigue utilizando Babel para transpilar el código.
Usa archivos .js sin "type": "module" si prefieres seguir usando la sintaxis de módulos CommonJS.
El manejo de extensiones es crucial para cómo Node.js interpreta y ejecuta tu código, y esto afecta directamente la forma en que Babel puede interactuar con él.
# Prueba