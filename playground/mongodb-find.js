//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err)
  {
  return console.log('Unable to connect to mongodb server.');

  }
  var db=client.db('Users');
  db.collection('Users').find({name: 'Kunal'}).toArray().then((docs)=>{
    //console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
  //  client.close();


});
