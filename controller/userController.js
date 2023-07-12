const User = require('../model/userModel')

const userController = {
    index : (req,res) => {
        res.render('index.ejs')
    },
    new : (req,res) => {
        res.render('create.ejs')
    },
    edit : (req,res) => {
        res.render('edit.ejs')
    },
    //we create a new controller to handle incoming data from front end
    newUser : async (req,res) => {
        try {
            const newUser = req.body

            //email exists or not
            const extEmail = await User.findOne({email : newUser.email})
            if(extEmail)
                return res.status(401).json({msg:`${newUser.email} already exists`})
            
            const extMobile = await User.findOne({mobile : newUser.mobile})
            if(extMobile)
                return res.status(401).json({msg:`${newUser.mobile} already exists`})
            
            await User.create(newUser)
    
            return res.status(200).json({msg:"User created successfully",newUser})
        } catch (err) {
            console.log(err)
        }
    },
    pnf : (req,res) => {
        res.render('pnf.ejs')
    },
}

module.exports = userController