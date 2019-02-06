//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err)
  {
  return console.log('Unable to connect to mongodb server.');

  }
  var db=client.db('TodoApp');
  var db1=client.db('Users');
  db1.collection('Users').insertOne({
    name: 'Kunal',
    age: 25 ,
    location: 'Bangalore'
  },(err,result)=>{
    if(err)
    {
    return console.log('There is an error',err);
    }
    console.log(result.ops);
  })
  console.log('Connected to mongodb server.');
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err,result)=>{
  if(err)
  {
    return console.log('Unable to insert in database');
  }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    client.close();
  }
);

});
