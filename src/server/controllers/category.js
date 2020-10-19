import categoryModel from '../models/category.js';

async function createCategory(data) {
  const document = await categoryModel.create(data);
  const { id, description } = document;
  return { id, description };
}

async function findAll() {
  const categories = await categoryModel.findAll();
  return categories.map((category) => {
    const { id, description } = category;
    return { id, description };
  });
}

async function findById(documentId) {
  const document = await categoryModel.findById(documentId);
  const { id, description } = document;
  return { id, description };
}

export default { createCategory, findAll, findById };
