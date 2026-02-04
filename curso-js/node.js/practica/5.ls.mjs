import fs from 'node:fs';
import path from 'node:path';

const folder = process.argv[2] ?? '.'; //operador ?? para valor por defecto el cual es '.'


async function ls (folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (err) {
    console.error(`Error leyendo el directorio ${folder}: ${err.message}`);
    process.exit(1);
  }
  const filesPromsises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try { 
      stats = await fs.stat(filePath);
    } catch (err) {
      console.error(`Error obteniendo los stats de ${filePath}: ${err.message}`);
      process.exit(1);
    }

    const isDir = stats.isDirectory();
    const fileType = isDir ? 'D' : 'F';
    const size = stats.size;
    const fileModified = stats.mtime.toLocaleString();
    return `${fileType} ${size.toString().padStart(10)} ${file.padEnd(20)} ${fileModified}`;
  })

  const filesDetails = await Promise.all(filesPromsises);
  filesDetails.forEach(detail => console.log(detail));
}

ls(folder);
