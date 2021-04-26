import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import InputTask from './components/InputTask';
import { createTodo } from './redux/actions'

function App(props){

  /*const onCreateTodo = ({ title, description })=>{
    props.dispatch(createTodo(title, description))
  }*/
  return (
    <div>
        <Header/>
        <InputTask todos={props.todos} onCreateTodo={props.createTodo}/>
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
    createTodo: (title, description)=>dispatch(createTodo(title,description))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
