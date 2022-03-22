const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('You do not permission for this action');
    try {
        // check token valid
        const checkToken = jwt.verify(token, 'masobimatkhongdctietlo');
        req.user = checkToken;
        next();
    } catch (error) {
        res.status(400).send('Token invalid')
    }
}