import mongoose from 'mongoose'

const ConnectMongo = (MONGO,log) => {
    mongoose.Promise = global.Promise;

    mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, data)=>log(`${data?"Connect":err.message} ${MONGO}`));
}

export default ConnectMongo;


