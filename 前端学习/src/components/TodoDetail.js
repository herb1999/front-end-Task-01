import Component from "../libs/Component.js"

class TodoDetail extends Component {
  render() {
    const { data } = this.model;
    return `
      <header>Todo Detail</header>
      
      ${data.todos.filter(todo => todo.id===data.activeTodoId).map(todo => {
        return `
          
            <div class='head' id='head'>
              <div class='title' id='title' >${todo.title}</div>
              <br/>
              <hr/>
              <div class='time' id='time'>${todo.createTime}</div>
              <br/>
            </div>
            <div class='content'id='content'>${todo.content}</div>
            <button id='editButton' onclick='TodoController.editTodo(this)'>edit</button>
          
        `
      }).join('')}
      
      
      
    `;
  }
}

export default TodoDetail