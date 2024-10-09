const User = require("../schema/UserShcmea");
const {userDto} = require("../dto/userDto");
const {hashPassword, comparePassword} = require("../utils/bcryptPassword");


const authController = {
    login: async(req, res) => {
        const {email, password} = req.body
        console.log(email)
        try {
            const user = await User.findOne({ where: { email } });
            console.log(user)
            if (!user) return res.status(401).json({message: "Invalid credentials", error:"User not found"})
            const isMatch = await comparePassword(password, user.password)
            if (!isMatch) return res.status(401).json({message: "Invalid credentials", error: "Password mismatch"})
            res.json(userDto(user))
        } catch (e) {
            console.log(e)
            res.status(500).json({error: e.message})
        }
    },
    register: async(req, res) => {
        const {name, email, password} = req.body
        try{
            const hashedPassword = await hashPassword(password)
            if(!hashedPassword) res.status(500).json({error: "password problems"})
            const user = new User({name, email, password:hashedPassword})
            await user.save()
            res.status(201).json(userDto(user))
        }
        catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}

module.exports = authController;