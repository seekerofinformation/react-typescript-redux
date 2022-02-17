import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList: FC = () => {
    const {error, page, todos, limit, loading} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useAction();
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])


    if (loading) {
        return <h1>Loading users...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div
                style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p} onClick={() => setTodoPage(p)} style={{border: p === page ? "2px solid green" : '1px solid gray'}}>{p}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;