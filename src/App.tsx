import React, {FC} from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

const App: FC = () => {
    return (
        <div>
          <UserList />
            <hr/>
            <TodoList />
        </div>
    );
};

export default App;