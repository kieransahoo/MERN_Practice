import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controller/users.js';

const router = express.Router();

// get all user details
router.get('/', getUsers);

// save a new user
router.post('/', createUser);

// get a user
router.get('/:id', getUser);

// delete a user
router.delete('/:id', deleteUser);

//update user
router.patch('/:id', updateUser);

export default router;
