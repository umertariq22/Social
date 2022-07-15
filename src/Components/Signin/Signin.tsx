import { useEffect } from 'react'
import './Signin.scss'

type modal = {
    setSignupOpen:(p:string) => void
}

const SignIn = ({setSignupOpen}:modal) =>{
    useEffect(() =>{
        document.title = 'Sign In';
    },[]);
    return(
        <div className='SigninContainer'>
            <div className="content">
                <h1>facebook</h1>
                <p>
                    Helping you to connect with people, share your moments and <br/>grow your buisness.
                </p>
            </div>
            <div className='Signin'>
                <input type="email" name="email" id="emailLogin" placeholder='Email Address'/>
                <input type="password" name="password"  id="passLogin" placeholder='Password'/>
                <button id="signinButton">Log In</button>
                <p>Forget Password?</p>
                <hr />
                <button onClick={() => setSignupOpen('flex')} id="signupButton">Create New Account</button>
            </div>
        </div>
    );
}

export default SignIn;