import express from 'express';
import categoryController from '../controllers/category.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const category = await categoryController.createCategory(req.body);
    res.send(category);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const array = await categoryController.findAll();
    res.send(array);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const category = await categoryController.findById(req.params.id);
    res.send(JSON.stringify(category));
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
