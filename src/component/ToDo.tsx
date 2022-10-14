import React, {useState} from 'react';
import Button from "./ui/Button";
import {FullItput} from "./ui/FullItput";
import s from './ToDo.module.css'
import Checkbox from "./ui/Checkbox";
import Input from "./ui/Input";

export type FilterType = 'all' | 'active' | 'completed'
export type  TaskType = {
    id: string
    title: string
    isDone: boolean

}
type ToDoListProps = {
    todoListId:string
    title: string
    filterTask: any
    deleteTask: (todListID:string,id: string) => void
    setFilter: (todoListID: string,value: FilterType) => void
    addTask: (todoListID: string,value: string) => void
    changeIsDone: (todoListID: string,id: string, newIsDone: boolean) => void
    removeTodoList:(todoListID: string)=>void


}

export const ToDo = (props: ToDoListProps) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<null | string>('')
    const [nameButton, setNameButton] = useState<FilterType>('all')


    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(props.todoListId,title.trim())
            setTitle('')

        } else {
            setError('Title is requaiment   ')
        }

    }

    const onChangeHandler = (value: string) => {
        setTitle(value)
        setError(null)
    }

    const onPressHandler = () =>addTaskHandler()

    const onChangeFilter = (filterValue: FilterType) => {
        setNameButton(filterValue)
        props.setFilter(props.todoListId,filterValue)

    }
    const changeIsDoneHandler = (id: string, isDone:boolean) => {
        props.changeIsDone(props.todoListId,id,isDone)
    }
    const removeTodoList=()=>{
        props.removeTodoList(props.todoListId)

    }



    const listItem = props.filterTask.map((e: any, index: number) => {
        return (
            <li key={e.id} className={e.isDone ? s.isdone : ''}>
                <Button  style='' callback={() => props.deleteTask(props.todoListId,e.id)}><p>+</p>
                </Button>
                <Checkbox checked={e.isDone} callback={(isDone:boolean) => changeIsDoneHandler(e.id,isDone)}/>

                <span>{e.title}</span>
            </li>

        )
    })

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <Button callback={removeTodoList} style={''}><p>x</p></Button>

                <Input value={title} callback={onChangeHandler} enterCallback={onPressHandler} style={error ? 'error' : ''}/>

                <Button callback={addTaskHandler} style=''>
                    <p>x</p>
                </Button>



                {error && <span>{error} </span>}
                <ul>
                    {listItem}
                </ul>
                <div>
                    <Button style={nameButton === 'all' ? 'active-filter' : ''} callback={() => onChangeFilter('all')}>
                        <p>All</p></Button>
                    <Button style={nameButton === 'active' ? 'active-filter' : ''}
                            callback={() => onChangeFilter('active')}><p>Active</p></Button>
                    <Button style={nameButton === 'completed' ? 'active-filter' : ''}
                            callback={() => onChangeFilter('completed')}><p>Completed</p></Button>
                </div>
            </div>
        </div>
    );
};


export default ToDo;