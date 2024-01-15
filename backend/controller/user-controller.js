import User from '../model/user.js'
import bcrypt from 'bcrypt'

export const signupUser = async (req, res) => {
    try{
        // const salt = await bcrypt.genSalt(); 
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = {username: req.body.username, name: req.body.name, password: hashedPassword};

        const newUser = new User(user);
        await newUser.save();

        return res.status(200).json({msg: "Signup Successful"});
    }
    catch(error){
        return res.status(500).json({msg: `Signup Failed : ${error.message}`});
    }
}