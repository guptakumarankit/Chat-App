import cloudinary from "../lib/cloudnary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from  "bcryptjs";

// controller signup a user 
export const signup = async(req , res) => {
    const {email , fullName , password , bio} = req.body();
    try{
        if(!email || !fullName || !password || !bio){
            return res.json({success : false , message : "Missing Details" })
        }

        const user = await User.findOne({email});
        if(user){
            return res.json({success : false , message : "Account Already exists!"})
        }

        // password hashed 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password , salt);
        
        // add in database..
        const newUser = await User.create({
            email , fullName , password : hashPassword , bio
        });

        // to auth..
        const token = generateToken(User._id);
        res.json({success : true , userData : newUser , token , message : "Account Created Successfully"});
    }
    catch(error){
        console.log(error.message);
        res.json({success : false , message : error.message});
    }
}

// controller login a user 
export const login = async(req , res) => {
    try {
        const {email , password} = req.body;
        const userData = await User.findOne({email})

        const isPasswordCorrect = await bcrypt.compare(password , userData.password);

        if(!isPasswordCorrect){
            return res.json({success : false , message : "Invalid credentials"});
        }

        const token = generateToken(userData._id);
        res.json({success : true , userData , token , message : "Login successful"});
    } catch (error) {
        console.log(error.message);
        res.json({success : false , message : error.message})
    }
}

// Controller to check if user is authenticated
export const chechAuth = (req , res) => {
    res.json({success : true , user : req.user});  
}

// Controller to update user profile details 
export const updateProfile = async(req , res) =>{
    try {
        const {profilePic , bio , fullName} = req.body;
        const userId = req.user._id;

        let updatedUser;
        if(!profilePic){
            updatedUser = await User.findByIdAndUpdate(userId , {bio , fullName} , {new : true});
        }
        else{
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId , {profilePic : upload.secure_url , bio , fullName} , {new : true});
        }
        res.json({success : true , user : updatedUser})
    } catch (error) {
        console.log(error.message);
        res.json({success : false , message : error.message})
    }
}