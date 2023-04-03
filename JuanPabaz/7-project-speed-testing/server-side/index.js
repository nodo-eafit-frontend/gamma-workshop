const express= require('express');/*Cuando no hay ./ es porque se llama modules*/ 
const router=require('./router');

const app=express();
const port=3001;

app.use(router);

app.listen(port,()=>{
    console.log(`Servidor corriendo puerto ${port}....`);
})