import mongoose from 'mongoose';
import logger from './logger.service.js';
import settings from '../config/config.js';

const options = {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    logger.debug('MongoDB connection with retry');
    await mongoose.connect(`mongodb://${settings.dbUrl}`, options);
    logger.info('MongoDB is connected');
  } catch (error) {
    logger.error('MongoDB connection unsuccessful, retry after 5 seconds.');
    setTimeout(connectDB, 5000);
  }
};

connectDB();

export default mongoose;
