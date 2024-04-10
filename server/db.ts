import mongoose from 'mongoose';

let connected = false;
const connect = async () => {
  try {
    if (connected) return;
    console.log('Connecting to mongoDB...', process.env);
    const con = await mongoose.connect('mongodb://db:27017');
    // mongoose.set('debug', (process.env.NODE_ENV || "").toLowerCase() !== 'production');
    connected = true;

    console.log('Connected to mongoDB!');
    return con;
  } catch (err) {
    console.error("Can't connect to mongoDB", err);
    throw err;
  }
};

export default connect;
