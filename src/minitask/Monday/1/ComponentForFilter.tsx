import React from 'react';
import Button from "./Button";
type TypeArray={
    banknots: string
    value: number
    number: string
}
type ComponentFilter={
    currenFilter:Array<TypeArray>
    callback:(name:FilterType)=>void
}
type  FilterType='All' | 'RUBLS' | 'Dollars'


const ComponentForFilter = (props:ComponentFilter) => {
    return (
        <div>

            {props.currenFilter.map((m,index)=><div key={index}>{m.banknots}</div>)}



            <Button name={'all'}callback={()=>{props.callback('All')}}/>
            <Button name={'Dollars'}callback={()=>{props.callback('Dollars')}}/>
            <Button name={'RUBLS'}callback={()=>{props.callback('RUBLS')}}/>
        </div>
    );
};

export default ComponentForFilter;