const {MongoClient} = require('mongodb');

const url =`mongodb+srv://venomnvn:Naveen1402%23%24@cluster0.x3huli5.mongodb.net/?retryWrites=true&w=majority` || process.env.MongoClient;
const Client = new MongoClient(url);
const fs = require('fs');
const process = require('process');
const DataBase = 'Naveen';

async function getDataUser()
{
    let result = await Client.connect();
    let db = result.db(DataBase);
    let collection =await db.collection('UserReact');
    return collection;
}

module.exports =  getDataUser;