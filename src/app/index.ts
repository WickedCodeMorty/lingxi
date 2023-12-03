import Koa from "koa";
import Router from "@koa/router";
import userRouter from "../routers/user_route";
const lingxi = new Koa();
const router = new Router();
router.get("/", async (ctx) => {
  ctx.body = "灵溪";
});
lingxi.use(router.routes());
lingxi.use(userRouter.routes());
export default lingxi;
