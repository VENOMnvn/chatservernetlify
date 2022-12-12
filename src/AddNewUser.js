const getDataUser = require('./GetUserData');
const GetUserData = require('./GetUserData');

async function AddNewUser(obj)
{
   const collection =  await getDataUser();
   const response = await collection.insertOne(obj);
   
   return response.acknowledged;
}
module.exports =  AddNewUser;