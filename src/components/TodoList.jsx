import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredTodoListState } from '../selectors/filterTodosSelector'
import { todoListState } from '../atoms/todoAtom'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodoListState)
  const setList = useSetRecoilState(todoListState)

  const clearDone = () => {
    setList(old => old.filter(t => !t.isComplete))
  }

  if (todos.length === 0) {
    return <div className="empty">Nenhuma tarefa</div>
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <button className="btn-clear" onClick={clearDone}>
        Limpar concluídas
      </button>
    </>
  )
}
