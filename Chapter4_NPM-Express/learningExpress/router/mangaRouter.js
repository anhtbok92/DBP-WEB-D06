const { body, validationResult } = require('express-validator');
const express = require('express');
const mangaRouter = express.Router();

// Dinh nghia danh sach cac quyen manga
const mangas = [
    { id: '1', name: 'Bay vien ngoc rong' },
    { id: '2', name: 'Tham tu lung danh connan' },
    { id: '3', name: 'Meo may doremon' },
    { id: '10', name: 'Meo may doremon 2' },
];

// handling manga
// GET localhost:3002/api/manga -> Trả về danh sách manga
// POST localhost:3002/api/manga { id, name: }  -> Thêm quyển truyện mới vào array (POSTMAN) và trả về mảng manga mới

// Lấy ra danh sách truyện
mangaRouter.get('/', function (req, res) {
   res.send(mangas);
});

// Tạo 1 quyển truyện mới.
// mangaRouter.post('/', function (req, res) {
//     const newManga = {
//         id: `${mangas.length + 1}`,
//         name: req.body.name,
//     };
//
//     mangas.push(newManga);
//     res.send(mangas);
// });

mangaRouter.post(
    '/',
    // name must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // custom error - trả về tiếng việt.
            return res.status(400).json({ errors: errors.array() });
        }

        const newManga = {
            id: `${mangas.length + 1}`,
            name: req.body.name,
        };
        mangas.push(newManga);
        res.send(mangas);
    },
);

module.exports = mangaRouter;