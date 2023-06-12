const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleDataString("en-US"),
       }, 
       username: {
        type: String,
        required: true,
       },
       reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false, //id is not included in JSON output
    },
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//initialized Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;