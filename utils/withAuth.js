const withAuth = (req, res, next) => {
    if (!req.session.userkey) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;