function check_leapyear(year:number){
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )  return true;
    return false;
}

const checkDate = (d:number,m:number,y:number) =>{
    // check if date is valid
    if(d < 1 || d > 31) return false;
    if(m < 1 || m > 12) return false;
    if(y < 1905) return false;
    if(m == 2) {
        if(check_leapyear(y)) {
            if(d > 29) return false;
        } else {
            if(d > 28) return false;
        }
    } else if(m == 4 || m == 6 || m == 9 || m == 11) {
        if(d > 30) return false;
    }
    if(y > new Date().getFullYear() - 17) return false;

    return true;
}
const checkEmail = (email:string) => {
    if(email === ''){
        return 'Enter email';
    }else{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email.toLowerCase())){
            return 'Email is invalid';
        }else{
            return '';
        }
    }
}

const checkPassword = (password:string) => {
    if(password == ''){
        return 'Enter password';
    }else{
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!re.test(password)){
            return 'Password should contain 8 characters, at least one uppercase letter, one number and one special character';
        }
        return '';
    }
}

const checkName = (name:string) => {
    if(name == ''){
        return 'Enter name';
    }else{
        const re = /^[a-zA-Z ]+$/;
        if(!re.test(name)){
            return 'Name should only contain letters and spaces';
        }
        return '';
    }
}



export {
    checkDate,
    checkEmail,
    checkPassword,
    checkName
};