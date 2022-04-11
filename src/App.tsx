import React from 'react';
import { Todo } from './models/all.models';

type MyProps = {
  title: string,
};
type TodoState = {
  todos: Todo[],
};

class App extends React.Component<MyProps, TodoState> {
  state: TodoState = {
    todos: [],
  };

  render() {
    return (
      <div>
        {this.state.todos.length}
      </div>
    );
  }
}

export default App;
