import './Signup.scss'
import { useForm } from '../../Requirements/hooks';
import { useEffect } from 'react';

const SignUp = () =>{

    const [values,errors,bindChange] = useForm();

    let years:{year:number}[] = [];
    let months:{month:number}[] = [];
    let dates:{date:number}[] = [];

    for(let i:number=new Date().getFullYear(); i > 1904; i--) years.push({year:i});
    for(let i = 1;i <= 12; i++) months.push({month:i});
    for(let i = 1;i <= 31; i++) dates.push({date:i});
    return(
        <div className='signUpContainer'>
            <div className='signUpModal'>
                <div className="nameInputs">
                    <input type="text" name="fname"  {...bindChange} placeholder="First Name"/>
                    <input type="text" name="lname" id="lname" {...bindChange} placeholder="Last Name"/>
                </div>
                <input type="email" name="email" id="email" {...bindChange} placeholder="Enter Email"/>
                <input type="password" name="pass" id="pass" {...bindChange} placeholder="Enter Password"/>
                <div className='dateInputs'>
                    <select name="date" id="date" {...bindChange}>
                        {dates.map((d) => <option key={d.date} value={d.date}>{d.date}</option>)}
                    </select>
                    <select name="month" id="month" {...bindChange}>
                        {months.map((d) => <option key={d.month} value={d.month}>{d.month}</option>)}
                    </select>
                    <select name="year" id="year" {...bindChange}>
                        {years.map((d) => <option key={d.year} value={d.year}>{d.year}</option>)}
                    </select>
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    );
}


export default SignUp;