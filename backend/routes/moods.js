const router=require('express').Router(); const db=require('../config/db'); const {auth}=require('../middleware/auth');
router.get('/',auth,async(req,res)=>{const [rows]=await db.query('SELECT id,mood,note,created_at FROM mood_entries WHERE user_id=? ORDER BY created_at DESC LIMIT 30',[req.user.id]);res.json(rows)});
router.post('/',auth,async(req,res)=>{const {mood,note=''}=req.body;if(!mood)return res.status(400).json({message:'Mood is required'});const [r]=await db.query('INSERT INTO mood_entries(user_id,mood,note) VALUES(?,?,?)',[req.user.id,mood,note]);res.status(201).json({id:r.insertId,mood,note})});
module.exports=router;
