import React from 'react';
import { Provider } from 'react-redux';
import store from './App/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTask />
        <h2>Tasks</h2>
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

