import mongoose from "mongoose";


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ugb1nft-shard-00-00.7hjzscm.mongodb.net:27017,ac-ugb1nft-shard-00-01.7hjzscm.mongodb.net:27017,ac-ugb1nft-shard-00-02.7hjzscm.mongodb.net:27017/?ssl=true&replicaSet=atlas-14734p-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Error while connecting the database ", error);
    }
}

export default Connection;