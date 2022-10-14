import React from 'react';

const Task1 = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <div>
            {topCars.map((car,idx)=><div key={idx}>{car.model}</div>)}
            
        </div>
    );
};

export default Task1;