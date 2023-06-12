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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Not a valid email address"],
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: User,
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

email.validate(function (err) {
    console.log(String(err));
});

//virtual property to get a user's number of friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//initialize User model
const User = model('user', userSchema);

module.exports = User;