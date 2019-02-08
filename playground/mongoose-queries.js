const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
var id='6c5c2b5609c1c30d1f478879';
Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos ',todos);
});
Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('Todos',todo);
});
Todo.findById(id).then((todo)=>{
  console.log('Todo by id',todo);
});
