import { useState,useEffect } from "react";
import { checkPassword,checkEmail,checkName, checkDate } from "./validator";



const useForm = () =>{
    const [errorExits,setErrorExits] = useState(true);
    const [values,setValues] = useState({
        fname:"",
        lname:"",
        email:"",
        pass:"",
        date:1,
        month:1,
        year:2022,
        gender:""
    });
    const [errors,setErrors] = useState({
        fname:"Enter Name",
        lname:"Enter Name",
        email:"Enter Email",
        pass:"Enter Password",
        dob:"Enter Correct Date",
        gender:"Select Gender"
    });

    useEffect(() =>{
        setErrors({
            fname:checkName(values.fname),
            lname:checkName(values.lname),
            email:checkEmail(values.email),
            pass:checkPassword(values.pass),
            dob:checkDate(values.date,values.month,values.year) ? "" : "Select Correct Date of Birth",
            gender:(values.gender === '') ? "Select Gender" : ""
        });
    },[values]);

    const handleChange = {
        values,
        onChange: (e:any) =>{
            setValues({
                ...values,
                [e.target.name]:e.target.value
            })
        }
    }

    const handleSubmit = (e:any) =>{
        for(let key in errors){
            // @ts-ignore
            if(errors[key] != ''){
                setErrorExits(true);
                break;
            }else{
                setErrorExits(false);
            }
        }
        if(!errorExits){

        }
    }


    return [values,errors,handleChange];
}


export {
    useForm
}