const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.token;
    if (!authHeader) return res.status(401).json({ message: 'Missing token' });

    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.id;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}

module.exports = auth;