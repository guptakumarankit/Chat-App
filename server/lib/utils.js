import jwt from 'jsonwebtoken';

// Function to generate a token for a User

export const generateToken = (userId) => {
     const token = jwt.sign({userId} , process.env.JWT_SECRET);
     console.log("newToken" , token);
     return token;
}