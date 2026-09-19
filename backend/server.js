require('dotenv').config();
const express=require('express'); const cors=require('cors'); const path=require('path'); const db=require('./config/db');
const app=express(); const PORT=process.env.PORT||5000;
app.use(cors()); app.use(express.json({limit:'2mb'}));
app.get('/api/health',async(req,res)=>{try{await db.query('SELECT 1');res.json({status:'ok',database:'connected'})}catch(e){res.status(500).json({status:'error',database:'disconnected'})}});
app.use('/api/auth',require('./routes/auth')); app.use('/api/moods',require('./routes/moods')); app.use('/api/journal',require('./routes/journal')); app.use('/api/bookings',require('./routes/bookings')); app.use('/api/resources',require('./routes/resources')); app.use('/api/admin',require('./routes/admin'));
app.use(express.static(path.join(__dirname,'..','frontend')));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'..','frontend','home.html')));
app.listen(PORT,()=>console.log(`Mentara running at http://localhost:${PORT}`));
