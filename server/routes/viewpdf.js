const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const path = require('path');
const pdfTemplate =require('../documents');
const _=require('lodash')

router.post('/generatePdf', async (req, res,next) => {

    await pdf.create(pdfTemplate(req.body), config = {
		  "height": "313mm",     
		  "width": "210mm",            

  }).toFile(`${__dirname}/result.pdf`, (err) => {
        if(err) {
            console.log(err);
        }
        res.send("Created!!");
    });
    
});

router.get('/fetch-pdf', (req, res, next) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;
