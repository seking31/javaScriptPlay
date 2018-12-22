import express from 'express';
import data from './data/data.json'

const app = express();
const PORT = 3000;


app.use('/images', express.static('images'))

app.get('/', (req, res) =>
    res.json(data)
);

app.get('/item/:id' , (req, res) => {
    console.log(req.params.id);
    let user = Number(req.params.id)
})

app.post('/newItem', (req, res) =>
    res.send(`POST a request with /newItem route on port ${PORT}`)
);

app.put('/item', (req, res) =>
    res.send(`PUT a request with /item route on port ${PORT}`)
);

app.delete('/item', (req, res) =>
    res.send(`DELETE a request with /item route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})