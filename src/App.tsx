import SignUp from "./Components/Signup/Signup"
import SignIn from "./Components/Signin/Signin"
import {useState } from "react"
function App() {
  const [modal,setModalOpen] = useState('none');
  return (
    <>
      <SignIn setSignupOpen={setModalOpen}/>
      <SignUp signupOpen={modal} setSignupOpen={setModalOpen}/>
    </>
  )
}

export default App
