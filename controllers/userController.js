const { User } = require('../models');

module.exports = {
    //GET all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err, 'line 10');
        }
    },

    //GET a single user by _id with populated thought and friend data
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne(
                {
                _id: req.params.userId}
                ).select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //POST a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err, 'Error creating user');
        }
    },

    //PUT to update user by _id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err, 'Error updating user');
        }
    },

    //DELETE user by _id and remove associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.json({ message: 'No user with this id' });
            }
            res.json(user);

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and thoughts deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};