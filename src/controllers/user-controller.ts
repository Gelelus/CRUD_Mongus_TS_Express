import service from "../services/user-service";
import { RequestHandler } from "express";

class UserController {
  constructor() {}
  static addUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.add(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static deleteUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.del(req.params.id);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static updateUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.update(req.body, req.user);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static getUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.get(req.params.id);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static getAllUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.getAll(req.query);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static getUserOrders: RequestHandler = async (req, res) => {
    try {
      const result = await service.getOrders(req.user);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static login: RequestHandler = async (req, res) => {
    try {
      const result = await service.login(req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static bindRecipeToUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.bindRecipe(req.user, req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static addRecipeToUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.addRecipe(req.user, req.body);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static getUserRecipes: RequestHandler = async (req, res) => {
    try {
      const result = await service.getRecipes(req.user);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  static addAvatarToUser: RequestHandler = async (req, res) => {
    try {
      const result = await service.addAvatar(req.file, req.user);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
}

export default UserController;
