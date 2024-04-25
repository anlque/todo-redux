import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Todo } from './components/Todo/Todo';
import { DeletedTodo } from './components/Todo/Deleted/DeletedTodo';
import { Sidebar } from './components/Sidebar/Sidebar';
import cls from './App.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={cls.App}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/deleted" element={<DeletedTodo />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
