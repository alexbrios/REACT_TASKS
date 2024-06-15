import React from 'react';
import { TodoItem } from '../TodoItem/Index';
import { TodoCounter } from '../TodoCounter/Index';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading/Index';
import { TodosError } from '../TodoError/Inex';
import { TodosEmpty } from '../TodoEmpty/Index';
import { TodoContext } from '../TodoContext/Index';
import { Modal } from '../Modal/Index';
import { TodoForm } from '../TodoForm/Index';

function AppUI() {
        const {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext)

        return (
            <>
            <TodoCounter />
            <TodoSearch />

                    <TodoList>
                    {loading && (
                        <>
                        <TodosLoading/>
                        <TodosLoading/>
                        <TodosLoading/>
                        </>
                    )
                    }
                    {error && <TodosError/>}
                    {(!loading && searchedTodos.length === 0) && <TodosEmpty/>}
                    {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                    </TodoList>
            <CreateTodoButton />

            {openModal && (
                    <Modal>
                            <TodoForm />
                    </Modal>
            )}
            </>

        );
}

export { AppUI }
