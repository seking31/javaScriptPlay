const express = require('express')
const data = require('./data/data.json')
const methods = require('./commomMethods/commonMethods')
const mongoose = require('mongoose')
const inventory = require('./schemas/inventory.schema.js')

const app = express();
const PORT = 3000;

app.get('/inventory', (req, res) =>
    res.json(data)
);

//item has been converted into a number so the id is recognized by mongoDb
app.get('/inventory/:sku' , (req, res) => {
    let skuId = Number(req.params.sku);
    var skuArray = [];
    data.forEach(function(item) {
      if (item.sku == skuId){
        skuArray.push(item);
      }
    });
    res.send(skuArray);
})

 app.get('/inventory/:tag' , (req, res) => {
    let tagId = Number(req.params.tag);
    var tagArray = [];
    data.forEach(function(item) {
      if (item.tag == tagId){
        tagArray.push(item);
      }
    });
    res.send(tagArray);
 })

app.post('/newInventory', (req, res) =>
    res.send(`POST a request with /newInventory route on port ${PORT}`)
);

app.put('/inventory', (req, res) =>
    res.send(`PUT a request with /inventory route on port ${PORT}`)
);

app.delete('/inventory', (req, res) =>
    res.send(`DELETE a request with /inventory route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})