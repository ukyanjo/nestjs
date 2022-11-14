import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  readAllCat,
  readCat,
  createCat,
  updateCat,
  patchUpdateCat,
  deleteCat,
} from "./cats.service";
import { create } from "domain";

const router = Router();

router.get("/cats", readAllCat);
router.get("/cats/:id", readCat);
router.post("/cats", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", patchUpdateCat);
router.delete("/cats/:id", deleteCat);

export default router;
