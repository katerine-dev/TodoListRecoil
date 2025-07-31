import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoAtom'

export default function TodoInput() {
  const [text, setText] = useState('')
  const setList = useSetRecoilState(todoListState)

  const addTodo = () => {
    if (!text.trim()) return
    setList(old => [
      ...old,
      { id: Date.now(), text: text.trim(), isComplete: false }
    ])
    setText('')
  }

  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite sua nova tarefa..."
      />
      <button
        className="btn-add"
        onClick={addTodo}
        disabled={!text.trim()}
      >
        Adicionar
      </button>
    </div>
  )
}
