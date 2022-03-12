// const express = require('express');
// const app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello world with express');
// });
//
// app.listen(3001);

const jsonExport = require('jsonexport');

const contacts = [
    {
        name: 'Tuan',
        lastName: 'Anh'
    },
    {
        name: 'Lee',
        lastName: 'Min Ho'
    },
    {
        name: 'Son',
        lastName: 'Nguyen Cong Thai'
    }
]

jsonExport(contacts, function(err, csv){
    if (err) return console.error(err);
    console.log('csv-content', csv);
});