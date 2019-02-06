//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err)
  {
  return console.log('Unable to connect to mongodb server.');

  }
  var db=client.db('TodoApp');
  db.collection('Todos').deleteMany({text: 'Lunch time'}).then((result)=>{
    console.log(result);
  });

});
