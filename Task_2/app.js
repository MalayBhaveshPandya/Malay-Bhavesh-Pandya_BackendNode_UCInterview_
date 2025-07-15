const express=require('express');
const app=express();
const showRoutes=require('./routes/routes.js');
app.use('/api',showRoutes);

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Listening to port: ${PORT}`);
})