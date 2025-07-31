import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoFilterState } from '../atoms/filterAtom'
import { todoListState } from '../atoms/todoAtom'

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState)
  const all = useRecoilValue(todoListState)
  const doneCount = all.filter(t => t.isComplete).length

  return (
    <>
      <div className="stats">
        {doneCount}/{all.length} concluídas
      </div>
      <div className="todo-filters">
      {[
        ['all','Todas'],
        ['pending','Pendentes'],
        ['completed','Concluídas']
      ].map(([key, label]) => (
        <button
          key={key}
          className={`btn-filter ${filter === key ? 'active' : ''}`}
          onClick={() => setFilter(key)}
        >
          {label}
        </button>
      ))}
      </div>
    </>
  )
}
