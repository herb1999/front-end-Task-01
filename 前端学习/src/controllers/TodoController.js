import Controller from "../libs/Controller.js";


class TodoController extends Controller {

  clickTodo(id) {
    this.model.update(data => ({
      ...data,
      activeTodoId: id
    }))
    
 
  }

  addTodo() {
    const nextId = new Date().valueOf();
    var now=new Date();
    const time=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+
                    now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    this.model.update(data => ({
      ...data,
      todos: [...data.todos, { id: nextId, title: '请输入标题', content: '请输入内容' ,createTime:time}],
      activeTodoId:nextId
    }))
    this.editTodo(document.querySelector('#editButton'));

  }

  editTodo(element){
    var title=document.getElementById('title');
    var content=document.getElementById('content');
    
    if(element.innerHTML==='edit'){
      element.innerHTML='save';
      
      var newTitle=document.createElement('textarea');
      newTitle.innerHTML=title.innerHTML;
      title.innerHTML='';
      title.appendChild(newTitle);

      var newContent=document.createElement('textarea');
      newContent.innerHTML=content.innerHTML;
      content.innerHTML='';
      content.appendChild(newContent);
      newContent.focus();
    }
    else{
      element.innerHTML='edit';

      title.innerHTML=title.firstChild.value;
      content.innerHTML=content.firstChild.value;


    }
      
    
   
    
    
  
  
  }
}
export default TodoController