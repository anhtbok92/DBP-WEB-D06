var express = require('express');
var router = express.Router();
const CarModel = require('../model/car.model');

router.get('/', function (req, res) {
   const nameCar = req.query.name;
   CarModel.find({ name: nameCar }).exec((err, cars) => {
       if (err) {
           res.send('Khong lay duoc thong tin car');
       } else {
           console.log('lay thong tin car thanh cong');
           if (cars.length > 0) {
               res.json(cars);
           } else {
               res.send('Khong tim thay thong tin car');
           }
       }
   })
});

router.get('/:id', function (req, res) {
    CarModel.findOne({ _id: req.params.id }).exec((err, car) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            if (car) {
                console.log('Get thong tin car by id thanh cong')
                res.json(car);
            } else {
                res.send('Khong tim thay thong tin car');
            }
        }
    })
});

router.post('/', function(req, res, next) {
    // Thuc hien insert new car to mongodb
    const car = new CarModel();
    car.name = req.body.name;
    car.manufacture = req.body.manufacture;
    car.price = req.body.price;
    car.save((err, car) => {
        if (err) {
            console.log('co loi xay ra');
            res.send('Loi insert data');
        } else {
            console.log('Insert car moi thanh cong', car);
            res.send(car);
        }
    });
});

router.put('/:id', function (req, res) {
    CarModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { manufacture: req.body.manufacture }},
        { upsert: true },
        (err, car) => {
            if (err) {
                res.send('Xay ra loi update roi !!!')
            } else {
                res.json(car);
            }
        }
    )
});

module.exports = router;
