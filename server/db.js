import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

export default mongoose.connection;