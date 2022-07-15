import './Signup.scss'
import { useRef } from 'react';
import svg from '../../static/close.svg'
import { checkDate,checkEmail,checkName,checkPassword } from '../../Requirements/validator';


type modal = {
    signupOpen:string,
    setSignupOpen:(p:string) => void
}

const SignUp =({signupOpen,setSignupOpen}:modal) =>{
    let years:{year:number}[] = [];
    let months:{month:number}[] = [];
    let dates:{date:number}[] = [];
    const  errors = {
        fname:"",lname:"",email:"",pass:"",dob:"",gender:""
    };
    let FormElements:any;
    const form= useRef<HTMLDivElement>(null)

    if(null!==form.current) FormElements = form.current;

    const setFnameError = () =>{
        errors.fname = checkName(FormElements.querySelector("#fname").value);
        (errors.fname != "")?FormElements.querySelector("#fname").classList.add("error"):FormElements.querySelector("#fname").classList.remove("error");
    }
    const setLnameError = () =>{
        errors.lname = checkName(FormElements.querySelector("#lname").value);
        (errors.lname != "")?FormElements.querySelector("#lname").classList.add("error"):FormElements.querySelector("#lname").classList.remove("error");
    }
    const setEmailError = () =>{
        errors.email = checkEmail(FormElements.querySelector("#email").value);
        (errors.email != "")?FormElements.querySelector("#email").classList.add("error"):FormElements.querySelector("#email").classList.remove("error");
    }
    const setPassError = () =>{
        errors.pass = checkPassword(FormElements.querySelector("#pass").value);
        (errors.pass != "")?FormElements.querySelector("#pass").classList.add("error"):FormElements.querySelector("#pass").classList.remove("error");
    }
    const setDobError = () =>{
        let d = FormElements.querySelector("#date");
        let m = FormElements.querySelector("#month");
        let y = FormElements.querySelector("#year");
        errors.dob = (checkDate(d.value,m.value,y.value)) ? "" : "Invalid Date";
        if(errors.dob != ""){
            d.style.borderColor = 'red';
            m.style.borderColor = 'red';
            y.style.borderColor = 'red';
        }else{
            d.style = '';
            m.style = '';
            y.style = '';
        }
    }
    const setGenderError = () =>{
        let e = false;
        let g = FormElements.querySelectorAll("[name='gender']");
        for(let i=0;i<g.length;i++){
            if(g[i].checked){
                e = true;
                break;
            }
        }
        errors.gender = (e) ? "" :"Select Gender";
        console.log(errors.gender);
        if(errors.gender != ''){
            FormElements.querySelectorAll('.radioWrapper')[0].style.borderColor = 'red';
            FormElements.querySelectorAll('.radioWrapper')[1].style.borderColor = 'red';
            FormElements.querySelectorAll('.radioWrapper')[2].style.borderColor = 'red';
        }else{
            FormElements.querySelectorAll('.radioWrapper')[0].style = '';
            FormElements.querySelectorAll('.radioWrapper')[1].style = '';
            FormElements.querySelectorAll('.radioWrapper')[2].style = '';
        }

    }
    const handleSubmit = () =>{
        setFnameError();
        setLnameError();
        setEmailError();
        setPassError();
        setDobError();
        setGenderError();
        if(errors.fname == "" && errors.lname == "" && errors.email == "" && errors.pass == "" && errors.dob == "" && errors.gender =='' ){

        }
    }
    for(let i:number=new Date().getFullYear(); i > 1904; i--) years.push({year:i});
    for(let i = 1;i <= 12; i++) months.push({month:i});
    for(let i = 1;i <= 31; i++) dates.push({date:i});
    return(
           <div className='modalContainer' style={{display:signupOpen}}>
            <div className='signUpModal' ref={form}>
                <div className="closeButton">
                    <h1>Signup</h1>
                    <img src={svg} alt='close' onClick={()=>setSignupOpen('none')}/>
                </div>
                <p>Its fast and secure</p>
                <hr />
                <div className="nameInputs">
                    <input type="text" name="fname"   placeholder="First Name" id="fname" onChange={(e) =>setFnameError()}/>
                    <input type="text" name="lname" id="lname"  placeholder="Last Name" onChange={(e) =>setLnameError()}/>
                </div>
                <input type="email" name="email" id="email"  placeholder="Enter Email" onChange={(e) =>setEmailError()}/>
                <input type="password" name="pass" id="pass"  placeholder="Enter Password" onChange={(e) =>setPassError()}/>
                <div className='dateInputs'>
                    <select name="date" id="date" onChange={setDobError}>
                        {dates.map((d) => <option key={d.date} value={d.date}>{d.date}</option>)}
                    </select>
                    <select name="month" id="month" onChange={setDobError}>
                        {months.map((d) => <option key={d.month} value={d.month}>{d.month}</option>)}
                    </select>
                    <select name="year" id="year" onChange={setDobError}>
                        {years.map((d) => <option key={d.year} value={d.year}>{d.year}</option>)}
                    </select>
                </div>
                <div className="genderInputs">
                    <div className="radioWrapper" id="female" >
                        <label htmlFor='female'>Female</label>
                        <input type="radio" name="gender" value="female" id="female" onChange={setGenderError}/>
                    </div>
                    <div className="radioWrapper" id="male" >
                        <label htmlFor='male'>Male</label>
                        <input type="radio" name="gender" value="male" id="male" onChange={setGenderError}/>
                    </div>
                    <div className="radioWrapper"  id="noOption" >
                        <label htmlFor='notSay'>Skip</label>
                        <input type="radio" name="gender" value="noOption" id="noOption" onChange={setGenderError}/>
                    </div>
                </div>
                <button onClick={handleSubmit}>Sign Up</button>
            </div>
            </div>
    );
}


export default SignUp;