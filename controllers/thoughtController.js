const { Thought, User } = require('../models');

module.exports = {
    //GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            .populate([
                {
                    path: 'reactions',
                    select:''
                },
            ]);
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
                ).select('-__v')
                .populate([
                    {
                    path: 'reactions',
                    select:''
                    },
                ]);
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
                { new: true }
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

    //POST a new reaction to a thought
    async addReaction(req, res) {
        try {
            console.log('Adding reaction');
            console.log(req.body);
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId },
                { $addToSet: {reactions: req.body }},
                { new: true },
            );
    
            if(!thought) {
                return res
                    .status(404)
                    .json({ message: 'No thought found with that ID' })
            };
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //DELETE a reaction
    async deleteReaction(req, res) {
        try{
            console.log('Deleting reaction');
            console.log(req.body);
            const thought = await Thought.findByIdAndUpdate(
                {_id: req.params.thoughtId },
                { $pull: {reactions: {_id: req.body.reactionId} } },
                { new: true },
            );
            if(!thought) {
                return res
                    .status(404)
                    .json({ message: 'No thought found with that ID' })
            };
            console.log(thought);
            res.json({ message: 'Reaction deleted' })
        } catch (err) {
            res.status(500).json(err);
        }
    }
};