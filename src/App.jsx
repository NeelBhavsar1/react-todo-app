import { useState } from 'react'

import TodoList from './ToDoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      
    </>
  )
}

export default App
