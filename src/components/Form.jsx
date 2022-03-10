import React, { useState } from 'react';

const Form = (props) => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPW, setConfirmPW] = useState("");

   const createUser = (e) => {
      e.preventDefault();
      const newUser = {firstName, lastName, email, password, confirmPW};
      console.log("Welcome,", newUser);
   }

   return (
      <main className="container">
         <form onSubmit={ createUser } className="text-start col-5 mx-auto mb-4">
            <h1 className="display-5 mb-3">Register:</h1>
            <div className="input-group mb-3">
               <span className="input-group-text">First Name:</span>
               <input type="text" name="firstName" id="firstName" className="form-control" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Last Name:</span>
               <input type="text" name="lastName" id="lastName" className="form-control" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Email:</span>
               <input type="email" name="email" id="email" className="form-control" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Password:</span>
               <input type="password" name="password" id="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Confirm PW:</span>
               <input type="text" name="confirmPW" id="confirmPW" className="form-control" onChange={ (e) => setConfirmPW(e.target.value) } value={ confirmPW } />
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