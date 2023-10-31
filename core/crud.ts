import fs from 'fs'
const DB_FILE_PATH = "./core/db" 

console.log("[ALGUMA COISA]");

function create(content: string) {

  fs.writeFileSync(DB_FILE_PATH, content)
  return content
}

create('Hoje preciso ir na academia e consultar com a nutricionista!')