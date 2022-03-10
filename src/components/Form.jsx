import React, { useState } from 'react';

const Form = (props) => {
   const [firstName, setFirstName] = useState("");
   const [firstNameError, setFirstNameError] = useState("");
   const [lastName, setLastName] = useState("");
   const [lastNameError, setLastNameError] = useState("");
   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState("");
   const [password, setPassword] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [confirmPW, setConfirmPW] = useState("");
   const [confirmPWError, setConfirmPWError] = useState("");
   const [hasBeenSubmitted, setHasBeenSubmitted] = useState("");

   const createUser = (e) => {
      e.preventDefault();
      const newUser = {firstName, lastName, email, password, confirmPW};
      console.log("Welcome,", newUser);
      setHasBeenSubmitted( true );
   };

   const handleFirstName = (e) => {
      setFirstName(e.target.value);
      if (e.target.value.length < 1) {
         setFirstNameError("This is a required field.");
      } else if (e.target.value.length < 4) {
         setFirstNameError("The name needs to be more than 3 characters long.");
      } else {
         setFirstNameError( false );
      }
   }

   const handleLastName = (e) => {
      setLastName(e.target.value);
      if (e.target.value.length < 1) {
         setLastNameError("This is a required field.");
      } else if (e.target.value.length < 4) {
         setLastNameError("The name needs to be more than 3 characters long.");
      } else {
         setLastNameError( false );
      }
   }

   const handleEmail = (e) => {
      setEmail(e.target.value);
      if (e.target.value.length < 1) {
         setEmailError("This is a required field.");
      } else if (!e.target.value.includes("@")) {
         setEmailError("This does not appear to be a valid email.");
      } else {
         setEmailError( false );
      }
   }

   const handlePassword = (e) => {
      setPassword(e.target.value);
      if (e.target.value.length < 1) {
         setPasswordError("This is a required field.");
      } else if (e.target.value.length < 8) {
         setPasswordError("Your password needs to be at least 8 characters in length.");
      } else {
         setPasswordError( false );
      }
   }

   const handleConfirmPW = (e) => {
      setConfirmPW(e.target.value);
      if (e.target.value.length < 1) {
         setConfirmPWError("This is a required field.");
      } else if (e.target.value !== password) {
         setConfirmPWError("This does not match what you entered for your password.");
      } else {
         setConfirmPWError( false );
      }
   }

   return (
      <main className="container">
         <form onSubmit={ createUser } className="text-start col-5 mx-auto mb-4">
            <h1 className="display-5">Register:</h1>
            {
               hasBeenSubmitted ? <h4 className="mb-3">Thank you for submitting the form!</h4> : <h4 className="mb-3">Welcome, please submit the form.</h4>
            }
            <div className="input-group mb-3">
               <span className="input-group-text">First Name:</span>
               <input type="text" name="firstName" id="firstName" className="form-control" onChange={ handleFirstName } value={ firstName } />
               {
                  firstNameError ? <p style={{color:'red'}}>{ firstNameError }</p> : ''
               }
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Last Name:</span>
               <input type="text" name="lastName" id="lastName" className="form-control" onChange={ handleLastName } value={ lastName } />
               {
                  lastNameError ? <p style={{color:'red'}}>{ lastNameError }</p> : ''
               }
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Email:</span>
               <input type="email" name="email" id="email" className="form-control" onChange={ handleEmail } value={ email } />
               {
                  emailError ? <p style={{color:'red'}}>{ emailError }</p> : ''
               }
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Password:</span>
               <input type="password" name="password" id="password" className="form-control" onChange={ handlePassword } value={ password } />
               {
                  passwordError ? <p style={{color:'red'}}>{ passwordError }</p> : ''
               }
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Confirm PW:</span>
               <input type="password" name="confirmPW" id="confirmPW" className="form-control" onChange={ handleConfirmPW } value={ confirmPW } />
               {
                  confirmPWError ? <p style={{color:'red'}}>{ confirmPWError }</p> : ''
               }
            </div>
            <div className="mb-3 text-end">
               <input type="submit" value="Submit" className="btn btn-sm btn-primary col-3 mx-auto" />
            </div>
         </form>

         <section className="col-5 mx-auto mb-3 text-start">
            <h2>Your User Data:</h2>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
         </section>
      </main>
   );
}

export default Form