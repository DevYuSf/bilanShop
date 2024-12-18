import express  from "express";
import { createUser, getUserById, getUsers, updateUser } from "../controller/userController.js";

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser);

export default router;