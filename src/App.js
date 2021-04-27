import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import TodoPage from './components/TodoPage';
import { createTodo, editTodo } from './redux/actions'

const App = props =>{

  return (
    <div className="App">
        <Header/>
        <TodoPage todos={props.todos} onCreateTodo={props.createTodo} onEditTodo={props.editTodo}/>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return{
    createTodo: (title, description)=>dispatch(createTodo(title,description)),
    editTodo: (id, params)=>dispatch(editTodo(id,params))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
