import { Router } from "express";
const router = Router();

router.get('/', (_,resp)=>{
    resp.status(200).render('index')
})

export default router