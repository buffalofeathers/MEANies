exports.isLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    };
};

exports.isAdmin = function(req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossOne = function(req, res, next) {
    if (req.user.boss_progress === 1) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossTwo = function(req, res, next) {
    if (req.user.boss_progress === 4) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossThree = function(req, res, next) {
    if (req.user.boss_progress === 7) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossFour = function(req, res, next) {
    if (req.user.boss_progress === 10) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossFive = function(req, res, next) {
    if (req.user.boss_progress === 13) {
        next ();
    } else {
        res.sendStatus(401);
    }
};