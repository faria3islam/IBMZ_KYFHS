import express from "express";
import { companies, countries, getOverviewStats } from "../data/overviewStore.js";

const router = express.Router();

router.get("/statistics/overview", (_req, res) => {
  return res.json(getOverviewStats());
});

router.get("/user/companies", (req, res) => {
  const limit = Number(req.query.limit || 0);
  const data = Number.isFinite(limit) && limit > 0 ? companies.slice(0, limit) : companies;
  return res.json(data);
});

router.get("/countries", (_req, res) => {
  return res.json(countries);
});

export default router;
