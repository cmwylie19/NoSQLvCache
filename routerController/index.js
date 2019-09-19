
import { Router } from 'express'
import mongoose from 'mongoose'
export const nosql = Collection => {

    // ============
    // Controllers
    // ============

    const create = (req, res) => {
        Collection.create(req.body, (err, result) => err ? res.status(500).send(err.message) : res.send(result))
    }

    const readMany = (req, res) => {
        Collection.find(res.locals.query || {}, (err, result) => err ? res.status(500).send(err.message) : res.send(result))
    }

    const readOne = (req, res) => {
        Collection.findById(req.params.id, (err, result) => err ? res.status(500).send(err.message) : res.send(result))
    }

    const update = (req, res) => {
        Collection.find({})
        .updateOne({ email: `${req.body.email}` })
        .exec((error,result) => error ? res.status(500).send(error.message) : res.send(result))
      }

    const remove = (req, res) => {
        Collection.deleteOne({ _id: req.params.id }, (err, result) => err ? res.status(500).send(err.message) : res.send(result))
    }

    // ============
    // Router
    // ============

    return Router()
        .post('/user', create)
        .get('/user/:id', readOne)
        .put('/user/:id', update)
        .delete('/user/:id', remove)
        .get('/user', readMany)

}






