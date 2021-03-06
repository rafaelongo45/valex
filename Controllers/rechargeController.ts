import { Request, Response } from "express";

import * as rechargeService from "../Services/rechargeService.js";

export async function rechargeCard(req: Request, res: Response){
  const { id } = req.params;
  const { key } = req.headers;
  const { amount } : { amount: number }= req.body;
  await rechargeService.recharge(id, amount, key);
  return res.sendStatus(200);
};
