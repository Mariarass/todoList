import React, {useState} from 'react';
import ComponentForFilter from "./ComponentForFilter";


type  FilterType='All' | 'RUBLS' | 'Dollars'

const Filter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    const [filter,setFilter]=useState<FilterType>('All')
    let currenFilter=money


    const clickFilter=(name:FilterType)=>{
        setFilter(name)

    }
    if (filter==='Dollars')currenFilter=money.filter((m)=> m.banknots==='Dollars')
    if (filter==='RUBLS') currenFilter=money.filter((m)=> m.banknots==='RUBLS')


    return (
        <div >
            <ComponentForFilter currenFilter={currenFilter} callback={clickFilter}/>
        </div>
    );
};

export default Filter;