import React from "react";
import { createContext,useContext } from "react";
 export const TodoContext=createContext({
todos:[//main properties
    {
        id:1,
        todo:"Todo msg",
        completed:false,
    }
],
//function
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTOdO:(id)=>{},
toogleComplete:(id)=>{}
 })


//hook li export
 export  const useTodo=()=>{
    return useContext(TodoContext);
 }

 //export provider

 export const TodoProvider=TodoContext.Provider