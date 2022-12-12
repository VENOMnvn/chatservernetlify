const GetUserData = require('./GetUserData');

async function SearchUser(obj) {

        const collection = await GetUserData();
        
        const result = await collection.find(obj).toArray();
        return {"response":result , "found":(result.length==1)?true:false};
}

module.exports = SearchUser;
