const createError = require('http-errors');
const User = require('../models/user.model');



module.exports.create = (req, res, next) => {
    User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(next) 
}

module.exports.get = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.status(204).json({}))
        .catch(next)
}

module.exports.update = (req, res, next) => {
    const { id } = req.params;

    User.findByIdAndUpdate(id, req.body, {new: true})
        .then(user => res.status(202).json(user))
        .catch(next)
}