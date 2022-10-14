import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, ToDo} from "./component/ToDo";
import {v1} from 'uuid';
import {FilterValuesType} from "../dop/dop2/App";

type TodoListType = {
    id: string
    title: string
    filter: FilterType

}
const App = () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const [todoList, setTodoList] = useState<Array<TodoListType>>(
        [
            {id: todoListId_1, title: 'what to learn', filter: 'all'},
            {id: todoListId_2, title: 'what to buy', filter: 'all'}
        ])


    const [task, setTask] = useState({
        [todoListId_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/TS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "RTK", isDone: false}],
        [todoListId_2]: [
            {id: v1(), title: "water", isDone: true},
            {id: v1(), title: "beer", isDone: true},
            {id: v1(), title: "bread", isDone: false},
            {id: v1(), title: "milk", isDone: false},
            {id: v1(), title: "meet", isDone: false}],


    })


    const changeIsDone = (todoListID: string, id: string, newIsDone: boolean) => {
        setTask({...task, [todoListID]: task[todoListID].map(el => el.id === id ? {...el, isDone: newIsDone} : el)})
    }

    const removeTask = (todoListID: string, id: string) => {
        setTask({...task, [todoListID]: task[todoListID].filter((el: any) => el.id != id)})
    }

    const addTask = (todoListID: string, value: string) => {
        const newTask = {id: v1(), title: value, isDone: false}
        setTask({...task, [todoListID]: [newTask, ...task[todoListID]]})
    }
    const changeFilter=(todoListID: string, value: FilterType)=>{
        setTodoList(todoList.map(el=>el.id===todoListID?{...el,filter:value}:el))

    }
    const removeTodoList=(todoListId:string)=>{
        setTodoList(todoList.filter(el=>el.id!==todoListId))
        delete  task[todoListId]

    }


    return (
        <div>
            {
                todoList.map((el) => {
                    let filterTask = task[el.id]
                    if (el.filter === 'active') {
                        filterTask = task[el.id].filter((e: TaskType) => !e.isDone)
                    }
                    if (el.filter === 'completed') {
                        filterTask = task[el.id].filter((e: TaskType) => e.isDone)
                    }

                    return (
                        <ToDo
                            todoListId={el.id}
                            title={el.title}
                            filterTask={filterTask}
                            changeIsDone={changeIsDone}
                            deleteTask={removeTask}
                            setFilter={changeFilter}
                            addTask={addTask}
                            removeTodoList={removeTodoList}


                        />

                    )
                })
            }


        </div>


    );
}

export default App;
