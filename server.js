const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


app.use(fileUpload());

 app.post('/upload', ((req, res) => {
     if(req.file == null){
         res.status(400).json({msg: 'No file Uploaded'});
     }
     const file = req.files.file;

     file.mv(`${__dirname}/clients/public/uploads`, err =>{
         if(err){
             console.error(err);
             return res.status(500).send(err);
         }
         res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
     })
 }))


app.listen(5000, () => console.log('Server Started'));



