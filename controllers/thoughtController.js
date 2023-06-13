const { Thought, User } = require('../models');

module.exports = {
    //GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET a single thought by _id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne(
                {
                _id: req.params.thoughtId}
                ).select('-__v');
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //POST a new thought
    async createThought(req, res) {
        // const { thoughtText, username, userId } = req.body;
        try {
            const newThought = await Thought.create(req.body);
            res.json(newThought);

            // push new thought to associated user's thoughts array
            await User.findByIdAndUpdate(
                {_id: req.body.userId },
                { $push: {thoughts: newThought._id }}
            )
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //PUT to update thought by _id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE Thought by _id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.json({ message: 'No thought with this id' });
            }
            res.json({ message: 'Thought deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};