const errorHandler=require('../utils/error.js')
const bcryptjs=require('bcryptjs');
const User=require('../models/user.model.js')
const jwt=require('jsonwebtoken')


const register=async (req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password || username===' ' || email===' ' || password===' ' ){
        next(errorHandler(400,"Please fill all fields"));
    }
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser= new User({
        username,
        email,
        password:hashedPassword,
    })

    try{
        await newUser.save();
        res.status(200).send({
            message:'Successfull Registration !!'
        });
    }
    catch(error){
        next(error);
    }
}

const login=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password || email===' ' || password===' '){
        errorHandler(400,"Please fill all fields");
    }
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
            errorHandler(404,"User not found");
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(400,"Invalid Password"));
        }
        const token=jwt.sign(
            {
                id:validUser._id,
            },
            process.env.JWT_SECRET,
        )
        const {password:pass,...rest}=validUser._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true
        }).send(rest)
    } catch (error) {
        next(error)
    }


}

module.exports={register,login}