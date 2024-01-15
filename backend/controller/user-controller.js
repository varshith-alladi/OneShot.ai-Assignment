import User from '../model/user.js'

export const signupUser = async (req, res) => {
    try{
        const user = req.body;

        const newUSer = new User(user);
        await newUSer.save();

        return response.status(200).json({msg: "Signup Successful"});
    }
    catch(error){
        return response.status(500).json({msg: `Signup Failed : ${error.message}`});
    }
}