import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoItem({ todo }) {
  const [list, setList] = useRecoilState(todoListState)

  const toggle = () =>
    setList(old => old.map(t =>
      t.id === todo.id ? { ...t, isComplete: !t.isComplete } : t
    ))
  const remove = () =>
    setList(old => old.filter(t => t.id !== todo.id))

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={toggle}
        />
        <span className={todo.isComplete ? 'done' : ''}>
          {todo.text}
        </span>
      </label>
      <button className="btn-remove" onClick={remove}>
        ×
      </button>
    </li>
  )
}
