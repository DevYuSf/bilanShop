import user from "./../models/userModel.js";

export const getUsers = async(req,res)=>{
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const getUserById = async(req,res)=>{
    try {
        const gUser = await user.findById(req.params.id);
        res.status(200).json(gUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body

        const lUser = await user.findOne({email});

        if(lUser){
            if (lUser.password == password) {
                res.status(200).json(lUser);
            }else{
                res.status(401).json({error:"Invalid password"});
            }
        }else{
            res.status(401).json({error:"Invalid email"});
        }
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


export const createUser = async(req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body

        const isUserExist = await user.findOne({email});

        if(isUserExist){
            res.status(400).json({error:"user is already exists"});
         
        }else{
            const cUser = await user.create({
                name,email,password,phone,address
            });
            res.status(201).json(cUser);
        }
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const updateUser = async(req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body

        const uUser = await user.findById(req.params.id);

        if(uUser){
            uUser.name = name;
            uUser.email = email;
            uUser.password = password;
            uUser.phone = phone;
            uUser.address = address;
            const updatedUser = await uUser.save();
            
            res.status(200).json(updatedUser);
         
        }
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

