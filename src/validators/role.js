import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const validateRole = [
  check("name", "name is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
