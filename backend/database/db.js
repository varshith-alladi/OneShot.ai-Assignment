import mongoose from "mongoose";


const Connection = async (url) => {
    const URL = url;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Error while connecting the database ", error);
    }
}

export default Connection;