import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './component'

function App() {
  const[todos,setTodo]=useState([]);

  const addTodo=(todo)=>{
setTodo((prev)=>[{id:Date.now(),...todo},...prev])
  }


  const updateTodo=(id,todo)=>{
setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))

  }
  const deleteTOdO=(id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toogleComplete=(id)=>{
    setTodo((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

useEffect(()=>{
 const todos= JSON.parse(localStorage.getItem('todos'))
if(todos&&todos.length>0)
{
  setTodo(todos);
}
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTOdO,toogleComplete}}>
      <h1>Todo</h1>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
{todos.map((todo)=>
<div key={todo.id}>
  <TodoItem todo={todo}/>
</div>
)}


                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
