
import jwt from 'jsonwebtoken'

export function Sign(payload){
    const SECRET = process.env.JWT_SECRET;
     return jwt.sign(payload, SECRET,{
        expiresIn : '3d',
     })
}

export function Verify(token){
    const SECRET = process.env.JWT_SECRET;
    try{
      return jwt.verify(token, SECRET)
    }catch(err){
        throw new Error("error in verification of token !")
    }
}

export function Decode(token){
    return jwt.decode(token);
}
