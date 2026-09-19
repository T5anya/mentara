const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

const tokenFor = user => jwt.sign({ id: user.id, email: user.email, name: user.name, role: user.role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });

router.post('/register', async (req,res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) return res.status(400).json({message:'Name, valid email and password of at least 6 characters are required'});
    const [existing] = await db.query('SELECT id FROM users WHERE email=?',[email.toLowerCase().trim()]);
    if (existing.length) return res.status(409).json({message:'An account with this email already exists'});
    const hash = await bcrypt.hash(password, 10);
    const [r] = await db.query('INSERT INTO users(name,email,password_hash) VALUES(?,?,?)',[name.trim(),email.toLowerCase().trim(),hash]);
    const user={id:r.insertId,name:name.trim(),email:email.toLowerCase().trim(),role:'user'};
    res.status(201).json({message:'Registration successful',token:tokenFor(user),user});
  } catch(e){ console.error(e); res.status(500).json({message:'Registration failed'}); }
});

router.post('/login', async (req,res) => {
  try {
    const {email,password}=req.body;
    const [rows]=await db.query('SELECT id,name,email,password_hash,role FROM users WHERE email=?',[String(email||'').toLowerCase().trim()]);
    if(!rows.length || !(await bcrypt.compare(password||'',rows[0].password_hash))) return res.status(401).json({message:'Invalid email or password'});
    const {password_hash,...user}=rows[0];
    res.json({message:'Login successful',token:tokenFor(user),user});
  } catch(e){ console.error(e); res.status(500).json({message:'Login failed'}); }
});
module.exports=router;
