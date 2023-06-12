const { Schema, model } = require('mongoose'); 

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);



//virtual property to get a user's number of friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//initialize User model
const User = model('user', userSchema);

module.exports = User;