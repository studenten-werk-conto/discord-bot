//NOTE: revisit this
const MongoClient = require("mongodb").MongoClient;
// Connection URI
require("dotenv").config({
  path: "../.env",
});
const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

const connection = client.connect();
const connect = connection;

const dbo = client.db("bot");

function db_insert(collection, data) {
  connect.then(() => {
    dbo.collection(collection).insertOne(data, (err, res) => {
      if (err) throw err;
    });
  });
}
// insert('dev',{a:1})

function db_insertmany(collection, data) {
  connect.then(() => {
    //NOTE: why is res a param?
    dbo.collection(collection).insertMany(data, (err) => {
      if (err) throw err;
    });
  });
}
// insertmany('dev',{{a:1},{a:2},{a:'ass'}})

async function db_find(collection, data) {
  let result;
  await connect.then(async () => {
    result = await dbo.collection(collection).find(data).toArray();
    if (result == "undefined") {
      result = false;
    }
  });
  return result;
}

// db_find('dev',{name: 'Red'})
async function db_findone(collection, data) {
  let result;
  await connect.then(async () => {
    result = await dbo.collection(collection).findOne(data);
  });
  if (result === undefined) {
    result = false;
  }
  if (result === null) {
    result = false;
  }
  return result;
}
/**
 * updates a single document 
 * @param {string} collection 
 * @param {object} query 
 * @param {object} data 
 * @description ussage: update('dev', { a: 2 }, {a:'papai'});
 */
function db_updateuser(collection, query, data) {
    const setdata = data
    const presence = data.presence
    delete setdata.presence
  connect.then(async () => {
    const NewData = {
    //   $set: {setdata},
      $addToSet: {"presence":presence}
    };
    const options = {
      upsert: true
    }
    await dbo.collection(collection).updateOne(query, NewData,options);
    console.log(`updated ${collection} ${query} with ${NewData}`);
  });
}
function db_update(collection, query, data) {
    connect.then(async () => {
      const NewData = {
        $set: data,
        $addToSet: data.presence
      };
      const options = {
        upsert: true
      }
      await dbo.collection(collection).updateOne(query, NewData,options);
      console.log(`updated ${collection} ${query} with ${NewData}`);
    });
  }
// update('dev', { a: 2 }, {a:'papai'});
/**
 * 
 * @param {STRING} collection 
 * @param {object} query 
 * @param {object} data 
 * @description ussage: update('dev', { a: 2 }, {a:'papai'});
 */
function db_updateset(collection, query, data) {
  connect.then(async () => {
    const NewData = {
      $addToSet: {"data":data.presence}
    };
    await dbo.collection(collection).updateOne(query, NewData);
    console.log(`updated ${collection} ${query} with ${NewData}`);
  });
}


function db_remove(collection, query) {
  connect.then(async () => {
    await dbo.collection(collection).deleteOne(query);
    console.log(`deleted ${query} from ${collection}`);
  });
}
// remove('dev',{a:"n-word"})

async function db_findandcount(collection, query) {
  let count;
  await connect.then(async () => {
    count = await dbo.collection(collection).countDocuments(query);
    if (count == "undefined") {
      count = false;
    }
  });
  return count;
}

module.exports = {
  db_insert,
  db_insertmany,
  db_find,
  db_update,
  db_updateuser,
  db_updateset,
  db_remove,
  db_findone,
  db_findandcount,
};