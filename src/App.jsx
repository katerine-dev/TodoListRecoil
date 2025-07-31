import React from 'react'
import { RecoilRoot } from 'recoil'
import TodoInput from './components/TodoInput'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <RecoilRoot>
      <div className="app-container">
        <h1 className="title">TodoList</h1>
        <TodoInput />
        <div className="todo-list-container">
          <TodoFilters />
          <TodoList />
        </div>
      </div>
    </RecoilRoot>
  )
}
