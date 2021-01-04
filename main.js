const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some default (required if your JSON file is empty)
db.defaults({ topic: [], author : [] })
  .write()

//Add post  
// db.get('author')
//     .push({ id : 1, name : "egoing", profile : "developer"})
//     .write();

// db.get('topic')
//     .push({id : 1, title : "lowdb", description : "lowdb is ...", author : 1})
//     .write();

// db.get('topic')
//     .push({id : 2, title : "mysql", description : "mysql is ...", author : 1})
//     .write();

// console.log(db.get('topic')
//     .find({ id : 1 })
//     .value());

// update
// db.get('topic')
//   .find({ id: 1 })
//   .assign({ title: 'lowdb and mariadb!'})
//   .write();

// remove
db.get('topic')
  .remove({ id: 1 })
  .write()