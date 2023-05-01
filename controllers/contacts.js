const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  console.log("All successfully request");
  const result = await mongodb.getDb().db('Lessons').collection('Contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  console.log("Single successfully request");
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('Lessons')
    .collection('Contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };
