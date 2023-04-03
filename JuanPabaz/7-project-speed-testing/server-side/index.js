const express= require('express');
const fs= require('fs');

const app=express();
const port=3001;

//API
app.get('/',(req,res)=>{
    //Llamar a la base de datos
    //res.send({dato: 'Home page la la la'});
    fs.readFile('../data/inicio.es.json',(err,data)=>{
        if(err){
            res.statusCode(400);
        }else{
            const elDato=JSON.parse(data);
            res.status(200).send(elDato);
        }

        //console.log(JSON.parse(data));       
    });
});

app.listen(port,()=>{
    console.log('Servidor corriendo....');
})