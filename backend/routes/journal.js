const router=require('express').Router(); const db=require('../config/db'); const {auth}=require('../middleware/auth');
router.get('/',auth,async(req,res)=>{const [rows]=await db.query('SELECT id,title,content,mood,created_at FROM journal_entries WHERE user_id=? ORDER BY created_at DESC',[req.user.id]);res.json(rows)});
router.post('/',auth,async(req,res)=>{const {title='My thoughts',content,mood=null}=req.body;if(!content?.trim())return res.status(400).json({message:'Journal content is required'});const [r]=await db.query('INSERT INTO journal_entries(user_id,title,content,mood) VALUES(?,?,?,?)',[req.user.id,title,content,mood]);res.status(201).json({id:r.insertId,title,content,mood})});
router.delete('/:id',auth,async(req,res)=>{await db.query('DELETE FROM journal_entries WHERE id=? AND user_id=?',[req.params.id,req.user.id]);res.json({message:'Entry deleted'})});
module.exports=router;
