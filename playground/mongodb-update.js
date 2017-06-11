// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUptade
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('593d46ef7bea69bd37d41a85')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('593d305213df5e3630293257')
    }, {
            $set: {
                name: 'Alex'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });


    // db.close();
});
