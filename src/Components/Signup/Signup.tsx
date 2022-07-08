import { useEffect, useState } from 'react';
import isDate from 'validator'
import './Signup.scss'

const DateSelector = () =>{
    const [date,setDate] = useState(1);
    const [month,setMonth] = useState(1);
    const [year,setYear] = useState(2022);

    let years:{year:number}[] = [];
    let months:{month:number}[] = [];
    let dates:{date:number}[] = [];

    useEffect(() =>{
        let dateToCheck:string = `${year}/`;
        month < 10
        ? dateToCheck += `0${month}/`
        : dateToCheck += `${month}/`;
        date < 10
        ? dateToCheck +=`0${date}`
        : dateToCheck += `${date}`;
        console.log(isDate.isDate(dateToCheck,{format:"YYYY/MM/DD"}));
    },[date,month,year]);

    for(let i:number=new Date().getFullYear(); i > 1904; i--) years.push({year:i});
    for(let i = 1;i < 13; i++) months.push({month:i});
    for(let i = 1;i < 32; i++) dates.push({date:i});
    return(
        <>
            <select name="date" id="date" onChange={(e) => setDate(parseInt(e.target.value))}>
                {dates.map((d) => <option key={d.date} value={d.date}>{d.date}</option>)}
            </select>
            <select name="month" id="month" onChange={(e) => setMonth(parseInt(e.target.value))}>
                {months.map((d) => <option key={d.month} value={d.month}>{d.month}</option>)}
            </select>
            <select name="year" id="year" onChange={(e) => setYear(parseInt(e.target.value))}>
                {years.map((d) => <option key={d.year} value={d.year}>{d.year}</option>)}
            </select>
        </>

    );
}


const SignUp = () =>{
    return(
        <div>
            <input type="text" name="fname" id="fname" />
            <input type="text" name="lname" id="lname" />
            <input type="email" name="email" id="email" />
            <input type="password" name="pass" id="pass" />
            <DateSelector/>
        </div>
    );
}


export default SignUp;