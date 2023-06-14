const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /apiRoutes/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /apiRoutes/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;