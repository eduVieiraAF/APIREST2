import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();
routes.get("/users", UserController.findUser);
routes.post("/user", UserController.addUser);

export default routes;