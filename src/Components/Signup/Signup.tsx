import './Signup.scss'
import { useForm } from '../../Requirements/hooks';
import { useState } from 'react';
import svg from '../../static/close.svg'

type modal = {
    signupOpen:string,
    setSignupOpen:(p:string) => void
}

const SignUp =({signupOpen,setSignupOpen}:modal) =>{

    const [values,errors,bindChange] = useForm();
    const [gender,setGender] = useState('Female');


    const handleGenderChange = (e:any) => {
        setGender(e.currentTarget.id);
    }

    let years:{year:number}[] = [];
    let months:{month:number}[] = [];
    let dates:{date:number}[] = [];

    for(let i:number=new Date().getFullYear(); i > 1904; i--) years.push({year:i});
    for(let i = 1;i <= 12; i++) months.push({month:i});
    for(let i = 1;i <= 31; i++) dates.push({date:i});
    return(
           <div className='modalContainer' style={{display:signupOpen}}>
            <div className='signUpModal' >
                <div className="closeButton">
                    <h1>Signup</h1>
                    <img src={svg} alt='close' onClick={()=>setSignupOpen('none')}/>
                </div>
                <p>Its fast and secure</p>
                <hr />
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
                <div className="genderInputs">
                    <div className="radioWrapper" id="female" onClick={handleGenderChange}>
                        <label htmlFor='female'>Female</label>
                        <input type="radio" name="gender" value="female" checked={gender == 'female'} />
                    </div>
                    <div className="radioWrapper" id="male" onClick={handleGenderChange}>
                        <label htmlFor='male'>Male</label>
                        <input type="radio" name="gender" value="male" checked={gender == 'male'}/>
                    </div>
                    <div className="radioWrapper"  id="noOption" onClick={handleGenderChange}>
                        <label htmlFor='notSay'>Skip</label>
                        <input type="radio" name="gender" value="noOption" checked={gender == 'noOption'}/>
                    </div>
                </div>
                <button>Sign Up</button>
            </div>
            </div>
    );
}


export default SignUp;