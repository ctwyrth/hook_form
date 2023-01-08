import React, { useReducer } from 'react';
import { UPDATE_FORM, onInputChange, onFocusOut } from '../lib/formUtils';

const initialState = {
   firstName: { value: '', touched: false, hasError: true, error: '' },
   lastName: { value: '', touched: false, hasError: true, error: '' },
   email: { value: '', touched: false, hasError: true, error: '' },
   isFormValid: false,
};

const formsReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_FORM:
         const { name, value, hasError, error, touched, isFormValid } = action.data;
         return {
            ...state,
            [name]: { ...state[name], value, hasError, error, touched }, isFormValid,
         };
      default:
         return state;
   }
}

export default () => {
   const [formState, dispatch] = useReducer(formsReducer, initialState);

   return (
      <div>
      {/* { JSON.stringify(formState) } */}
         <form className="text-start col-5 mx-auto my-4">
            <div className="input-group mb-3">
            <span className="input-group-text">First Name:</span>
               <input
                  type="text"
                  name="firstName"
                  value={formState.firstName.value}
                  className="form-control"
                  onChange={e => { onInputChange("firstName", e.target.value, dispatch, formState) }}
                  onBlur={e => { onFocusOut("firstName", e.target.value, dispatch, formState) }}
               />
               {/* { formState.name.touched && formState.name.hasError && (<div className="error">{ formState.name.error }</div>)} */}
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Last Name:</span>
               <input
                  type="text"
                  name="lastName"
                  value={formState.lastName.value}
                  className="form-control"
                  onChange={e => { onInputChange("lastName", e.target.value, dispatch, formState) }}
                  onBlur={e => { onFocusOut("lastName", e.target.value, dispatch, formState) }}
               />
               {/* { formState.name.touched && formState.name.hasError && (<div className="error">{ formState.name.error }</div>)} */}
            </div>
            <div className="input-group mb-3">
               <span className="input-group-text">Email:</span>
               <input
                  type="email"
                  name="email"
                  value={formState.email.value}
                  className="form-control"
                  onChange={e => { onInputChange("email", e.target.value, dispatch, formState) }}
                  onBlur={e => { onFocusOut("email", e.target.value, dispatch, formState) }}
               />
               {/* { formState.name.touched && formState.name.hasError && (<div className="error">{ formState.name.error }</div>)} */}
            </div>
            <div className="input-group mb-3">
               <input type="submit" value="Submit" className="btn btn-sm btn-primary col-3 mx-auto" />
            </div>
         </form>
      </div>
   );
}
