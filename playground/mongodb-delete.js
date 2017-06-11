// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({ name: 'Alex' }).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("593d3053a65da91ca40861f4") }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });
    // db.close();
});
