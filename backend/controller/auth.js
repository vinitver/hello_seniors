import { db } from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const register=(req,res)=>{
  // console.log("ff")// clg(",,2")
  console.log("aa");
    const q= "SELECT * from user where email= ? or username=?";
  //  console.log("hello");
    db.query(q,[req.body.email, req.body.name], (err, data)=>{
     // console.log("hii");
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User Already Exists!!");

        const salt= bcrypt.genSaltSync(10);
        const hash= bcrypt.hashSync(req.body.password, salt);
        
        const q= "INSERT INTO user(`username`,`email`,`password`) VALUES (?)";
        console.log(req.body.username)
        console.log(req.body.email)
        console.log(hash)
        const values=[req.body.username,req.body.email,hash
        ];
        
        db.query(q,[values],(err, data)=>{

         //  console.log(values)
            if(err) return res.status(500).json("Sorry user cannot be registered");
            //console.log(data)
            return res.status(200).json("user has been created.")
        })
    })
}

export const login=(req,res)=>{
    const q= "SELECT * from user where username= ? ";
    

    db.query(q,[req.body.username],(err, data)=>{
        if(err) return res.status(500).json("some error occured")
        if(data.length===0) return res.status(500).json("User not found");
        const passwordCorrect= bcrypt.compareSync(req.body.password, data[0].password);
        if(!passwordCorrect) return res.status(500).json("Password incorrect");
        //return res.status(200).json("User login successfull") 

        const token= jwt.sign({id:data[0].id}, "jwtkey");
        const{password, ...other}= data[0];
        res.cookie("access_token", token, {
          httpOnly:true
        }).status(200).json(other);
    });
}

export const logout=(req,res)=>{
    res.clearCookie("access_token",{
    sameSite:"none",
    secure:true 
  }).status(200).json("User has been logged out.")
};