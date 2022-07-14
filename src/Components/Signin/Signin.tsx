import './Signin.scss'

type modal = {
    setSignupOpen:(p:string) => void
}

const SignIn = ({setSignupOpen}:modal) =>{
    return(
        <div className='SigninContainer'>
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