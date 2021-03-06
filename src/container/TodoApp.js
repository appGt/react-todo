import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import '../style/TodoApp.less'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todoApp">
        <header>
          <div className="header-wrap">
            <TodoInput />
            <TodoFilter />
          </div>
        </header>
        <TodoList />
      </div>
    )
  }
}