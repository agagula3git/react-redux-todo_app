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

The first argument passed to the createStore function is a reducer. The store requires at least one reducer.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
