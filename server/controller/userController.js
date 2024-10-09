const User = require("../schema/UserShcmea");

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    setUserAdmin: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            await user.update({role: "admin"});
            res.status(200).json('set as admin');
        } catch (e) {
            res.status(500).json(e)
        }
    },
    removeUserAdmin: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            await user.update({role: 'user'});
            res.status(200).json('removed from admin');
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = userController;