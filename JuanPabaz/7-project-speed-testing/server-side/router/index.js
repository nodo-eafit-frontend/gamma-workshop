const fs= require('fs');
const express = require('express');
const router =express.Router();

const homePagePath='./Database/page-structure/home-page.json'

router.get('/',(req,res)=>{
    //Llamar a la base de datos
    //res.send({dato: 'Home page la la la'});
    fs.readFile(homePagePath,(err,data)=>{
        if(err){
            res.statusCode(400);
        }else{
            const elDato=JSON.parse(data);
            setTimeout(()=>{
                res.status(200).send(elDato);
            },5000);
            
        }

        //console.log(JSON.parse(data));       
    });
});

module.exports=router;