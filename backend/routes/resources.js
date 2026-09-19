const router=require('express').Router(); const db=require('../config/db'); const {auth}=require('../middleware/auth');
router.get('/',auth,async(req,res)=>{const [rows]=await db.query('SELECT id,title,description,category,url FROM resources WHERE active=1 ORDER BY category,title');res.json(rows)}); module.exports=router;
