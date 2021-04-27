# ReactJs | Redux - Building a Todo-List Application


## Getting Started with Create React App
Create React App is a command line interface (CLI) tool that will create relatively simple, production-ready React application. There're two different ways to install your production-ready React application. You can do it in a single step by running the following command at the prompt:
```bash
npx create-react-app my-app
```
Another way to do the same thing is using your favorite package manager. In this project, we'll use npm. In a terminal window, run the following
command at the prompt:
```bash
npm install --global create-react-app
```
Once installed, you can create a new project with
```bash
create-react-app my-app
```
Whether you use your favorite package manager or the first way to do the same in a single step, creating a new application can take a few minutes, depending on the time it takes to install the dependencies on your machine.  
  
When it completes, there will be a newly created my-app directory waiting for you. To view the application, you’ll start the development server, which takes care of serving
your JavaScript code to the browser (among other things).   Navigate to my-app directory now, and run the following command at the prompt: 
```bash
npm start
```
If create-react-app didn’t open a browser window automatically after starting the development server, open a browser and head to [localhost:3000](http://localhost:3000).
Try changing the home page layout by editing the src/App.js file. You should see the browser refresh automatically, without having to reload the page.  

## React Components
In a new directory under src/ called components/ create files for the new components, ViewTodos.js and TodoPage.js. ViewTodos is implemented to be stateless functional component.  
  
  Within TodoPage.js, we import created ViewTodos component and display each todo-item. This component needs to manage local state when you introduce the new todo form.  
  
To start, TodoPage will receive data from top-level component, App. App is the main component of our application, which render all data to other components, and it will be connected to the Redux store. 

## Configuring The Redux Store
The main hub of functionality in Redux is the store—the object responsible for managing application state. The Redux package exports a createStore function that is used to create a Redux store. Specifically, the Redux store is an object with a few core methods that can read and update state and respond to any changes: getState, dispatch, and subscribe.  
  
To start with Redux, you need to add Redux as a dependency of the project by running the following command in a terminal window:
```bash
npm install redux
```
Now that Redux has been added, the next step is to integrate it into your existing React components. First create the store by adding the code shown in the
following listing to index.js.
```python
import { createStore } from 'redux';
import todos from './redux/reducers'

const store = createStore(todos);
...
```
The first argument passed to the createStore function is a reducer. The store requires at least one reducer. A reducer is a function that takes the current state of the store and an action and returns the new state after applying any updates.  
  

Within the src directory, we'll create a new directory, redux, with an reducers.js and actions.js files. In reducers.js file,
we’ll create and export a single function, reducer, that returns the given state, as shown in the following listing.
```python
export default function reducer(state = {todos: initTodos}, action){
    switch(action.type){
        case 'CREATE_TODO':
            return{
                todos: state.todos.concat(action.payload)
            }
        case 'EDIT_TODO':
            const {payload} = action;
            return{
                todos: state.todos.map(todo =>{
                    if(todo.id === payload.id){
                        return Object.assign({}, todo, payload.params)
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}
```
Reducers check the action's type to determine if it should respond to it. In our application we're dispatching CREATE_TODO and EDIT_TODO actions, indicating an event has occured. If the action is CREATE_TODO, the function reducer adds todo-item to the array and return the result.  
  
If the action being passed in is of type EDIT_TODO, we'll update the current todo-item by iterating over the list of todos with map. If the current todo matches the ID from the payload, we should update it with the new params. If the action that has occurred can't be handled, we should return the given state.  
  
In actions.js file, we'll create two action creators - functions that return actions, createTodo and editTodo.
```python
export function createTodo({title, description}){
    return{
        type: 'CREATE_TODO',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted'
        }
    }
}

export function editTodo(id, params={}){
    return{
        type: 'EDIT_TODO',
        payload: {
            id,
            params
        }
    }
}
```
App imports createTodo and editTodo action creators, and passes them required parameters. These action creators format and return an action with the payload property that contains all the data necessary to perform the action.

### Connecting React and Redux with react-redux
To connect Redux with React, we’ll use the React bindings from the react-redux package.
react-redux gives you two primary tools for connecting your Redux store to React:
* Provider — A React component that you’ll render at the top of the React app. Any components rendered as children of Provider can be granted access to the Redux store.
* connect — A function used as a bridge between React components and data from the Redux store.  
  
Provider is a component that takes the store as a prop and wraps the top-level component in your app in this case, App. Any child component rendered within Provider can access the Redux store, no matter how deeply it’s nested. In index.js, import the Provider component and wrap the App component, using the code in the following listing.
```python
ReactDOM.render(
  <Provider store={store}> 2
    <App />
  </Provider>,
  document.getElementById('root')
);
```  
  
### Passing data from Redux to React components
Now that we've created Redux store with a reducer, and used the Provider component from react-redux to make the store available to our React components, we should enhance a React component with connect. By adding connect to the App component, we declare it as an entry point for data from the Redux store.  
  
To connect all needed data from redux to React components, we'll use the function mapStateToProps in App.js file. Function mapStateToProps takes a first argument called state, and return a plain object containing the data that the connected component needs. For dispatching actions to the store, we use a function mapDispatchToProps. mapStateToProps and mapDispatchToProps will be passed to the function connect as its arguments.
```python
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
```
## 🙌 Contribution
I hope that this project will help you to unlock new ideas and improve your skills. Should you need any further information, please do not hesitate to [contact](mailto:agagula3@etf.unsa.ba) me.  
  
Best regards,  
Ajdin G.
