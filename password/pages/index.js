import { useState, useEffect } from "react"

export default function Home() {
const [userDetails, setUserDetails] = useState({
  name: '',
  email: '',
  password: ''
})

const [passValidation, setPassValidation] = useState({
  passNum: null,
  minCharacter: null,
  passLower: null,
  passUpper: null,
  passSpecial: null
});



useEffect(()=>{


  const hasNumber = /\d/
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasSpecialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const passLength = userDetails.password.length;


  //test
  const passNum = hasNumber.test(userDetails.password);
  const upperCase = hasUpperCase.test(userDetails.password);
  const lowerCase = hasLowerCase.test(userDetails.password);
  const specialCharacter = hasSpecialCharacter.test(userDetails.password);


  setPassValidation({
    passNum: passNum,
    minCharacter: passLength,
    passLower: lowerCase,
    passUpper: upperCase,
    passSpecial: specialCharacter
  })



}, [userDetails.password])





  return (
    <>
     <div className="mainDiv">
        
        <div className="subDiv">
              <label className="marginTop">Name</label>
              <input type="text" placeholder="Name" className="custominput" onChange={(e)=> setUserDetails({...userDetails, name: e.target.value})}/>

              <label className="marginTop">Email</label>
              <input type="text" placeholder="Email" className="custominput" onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})}/>

              <label className="marginTop">Password</label>
              <input type="text" placeholder="text" className="custominput" onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})}/>

              <div>
                  <p className={passValidation.minCharacter < 8 ? 'red': 'green'}>Minimum of 8 characters</p>
                  <p className={passValidation.passUpper ? 'green' : 'red'}>At least one upper case character</p>
                  <p className={passValidation.passLower ? 'green' : 'red'}>At least one lowercase character</p>
                  <p className={passValidation.passNum ? 'green' : 'red'}>At least one number</p>
                  <p className={passValidation.passSpecial ? 'green': 'red'}>At least one special character</p>
              </div>

              <div className="customBTNDiv">
              <button className="customBTN">Subit</button>
              </div>
        </div>
     </div>
    </>
  )
}
