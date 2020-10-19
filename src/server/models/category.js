import mongoose from '../services/database.service.js';

const collection = 'Categories';

const json = {
  description: {
    type: String,
    required: true,
  },
};

const schema = mongoose.Schema(json);

const model = mongoose.model(collection, schema);

async function findAll() {
  return await model.find({});
}

async function findById(id) {
  return await model.findById(id).exec();
}

async function create(data) {
  const document = new model(data);
  return await document.save();
}

export default { create, findAll, findById };
