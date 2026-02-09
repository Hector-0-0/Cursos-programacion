// 5.ls.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import picocolors from 'picocolors';

// Capturamos el directorio desde los argumentos de la consola (ej: node 5.ls.mjs ./src)
// El operador nullish coalescing (??) asigna '.' (directorio actual) si no se pasa nada.
const folder = process.argv[2] ?? '.'; 

async function ls (folder) {
  let files;
  
  // 1. Intentamos leer el directorio
  try {
    files = await fs.readdir(folder);
  } catch (err) {
    // Si falla (ej: carpeta no existe), mostramos error en rojo y matamos el proceso
    console.error(picocolors.red(`Error leyendo el directorio ${folder}: ${err.message}`));
    process.exit(1);
  }

  // 2. Mapeamos los archivos para obtener su información detallada
  /**
   * Usamos .map() para crear un array de Promesas. 
   * IMPORTANTE: No usamos forEach aquí porque necesitamos esperar a que todas las
   * llamadas asíncronas de fs.stat terminen.
   */
  const filesPromsises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    
    try { 
      // Obtenemos los metadatos de cada archivo/carpeta
      stats = await fs.stat(filePath);
    } catch (err) {
      console.error(picocolors.red(`Error obteniendo los stats de ${filePath}: ${err.message}`));
      process.exit(1);
    }

    // Determinamos si es Directorio (D) o Archivo (F)
    const isDir = stats.isDirectory();
    const fileType = isDir ? 'd' : 'f';
    const size = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    // Retornamos la línea formateada con colores y espacios alineados (padEnd/padStart)
    return `${picocolors.gray(fileType)} ${picocolors.green(file.padEnd(30))} ${picocolors.blue(size.toString().padStart(10))} ${picocolors.yellow(fileModified)}`;
  })

  // 3. Resolvemos todas las promesas en PARALELO para máxima velocidad
  const filesDetails = await Promise.all(filesPromsises);
  
  // 4. Imprimimos los resultados finales
  filesDetails.forEach(detail => console.log(detail));
}

// Ejecutamos la función
ls(folder);

/**
 * NOTA SOBRE NPM Y VERSIONES:
 * Para la actualización de paquetes en node.js se usa semantic versioning (SemVer)
 * x.y.z
 * x (Major): Cambios grandes que rompen compatibilidad (Breaking changes).
 * y (Minor): Nuevas funcionalidades, pero mantiene compatibilidad.
 * z (Patch): Arreglo de bugs (Bugfixes).
 */